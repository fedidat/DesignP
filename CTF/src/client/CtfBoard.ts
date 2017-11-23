import { Player } from './Player';
import { Point } from './Point';
import { Dimension } from './Dimension';
import { Flag } from './Flag';
import { Direction } from './Direction';
import { Graphics } from './Graphics';
import { Input } from './Input';

export class CtfBoard {
    private players: Player[] = [];
    private flags: Flag[] = [];
    public currentPlayer: string;
    public graphics: Graphics;
    public dimension: Dimension = new Dimension(800, 400);
    public color: string = "LightGrey";
    private canvasId: string = "boardarea";

    constructor(currentPlayer: string) {
        this.currentPlayer = currentPlayer;
        this.graphics = new Graphics(this.canvasId, this.color, this.dimension);
        this.graphics.prepareBoard();
    }

    public getCurrentPlayer(): Player | undefined {
        var filtered: Player[] = this.players.filter(player => player.username === this.currentPlayer);
        return filtered.length === 1 ? filtered[0] : undefined;
    }

    public addPlayer(username: string): void {
        var created: Player = new Player(username, this.players.length, this.dimension);
        this.players.push(created);
        this.redrawCanvas();
        this.addRandomFlags();
    }
    public addRandomFlags(): void {
        for (var i: number = 0; i < 2; i++) {
            var randX: number = Math.round(Math.random() * (this.dimension.width - 100) + 50);
            var randY: number = Math.round(Math.random() * (this.dimension.height - 100) + 50);
            var flagPoint = new Point(randX, randY);
            var flagDimension = new Dimension(50, 50);
            var flag: Flag = new Flag(flagPoint, flagDimension);
            this.flags.push(flag);
        }
        this.redrawCanvas();
    }

    public redrawCanvas(): void {
        for(var i=0; i<Input.pressedKeys.length; i++) {
            if(Input.pressedKeys[i]) {
                this.getCurrentPlayer()!.move(<Direction>i, this.dimension);
            }
        }

        this.graphics.clearTheBoard();
        this.players.forEach(player => {
            player.draw(this.graphics);
        });
        this.flags.forEach(flag => {
            flag.draw(this.graphics);
        });
        requestAnimationFrame(() => this.redrawCanvas());
    }
}