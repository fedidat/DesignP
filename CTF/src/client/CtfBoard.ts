import { Player } from './Player';
import { Point } from './Point';
import { Dimension } from './Dimension';
import { Flag } from './Flag';
import { Direction } from './Direction';

export class CtfBoard {
    private players: Player[] = [];
    private flags: Flag[] = [];
    public dimension: Dimension = new Dimension(800, 400);
    public color: string = "Lightgrey";
    public currentPlayer: string;

    constructor(currentPlayer: string) {
        this.currentPlayer = currentPlayer;
        this.gameLoop();
    }

    public getCurrentPlayer(): Player | undefined {
        var filtered: Player[] = this.players.filter(player => player.username === this.currentPlayer);
        return filtered.length === 1 ? filtered[0] : undefined;
    }

    public prepareBoard(): void {
        $('#boardarea').attr('width', this.dimension.width + 50).attr('height', this.dimension.height + 50);
        $("#boardarea").css("background-color", this.color);
        $("#boardarea").css("z-index", -1);
    }
    public addPlayer(username: string): void {
        var created: Player = new Player(username, this.players.length, this.dimension);
        this.players.push(created);
        this.redrawCanvas();
        this.addRandomFlags();
    }
    public addRandomFlags(): void {
        for(var i: number = 0; i < 2; i++) {
            var randX: number = Math.round(Math.random() * this.dimension.width);
            var randY: number = Math.round(Math.random() * this.dimension.height);
            var flagPoint = new Point(randX, randY);
            var flagDimension = new Dimension(50, 50);
            var flag: Flag = new Flag(flagPoint, flagDimension);
            this.flags.push(flag);
        }
        this.redrawCanvas();
    }

    private keyState: boolean[] = [];    
    public doKeyDown(event: KeyboardEvent): void {
        this.keyState[event.keyCode || event.which] = true;
    }
    public doKeyUp(event: KeyboardEvent): void {
        this.keyState[event.keyCode || event.which] = false;
    }
    private gameLoop(): void {
        if(!this.getCurrentPlayer())
            return;
        if (this.keyState[38] || this.keyState[87]){
            this.getCurrentPlayer()!.move(Direction.UP, this.dimension);
        }
        if (this.keyState[40] || this.keyState[83]){
            this.getCurrentPlayer()!.move(Direction.DOWN, this.dimension);
        }
        if (this.keyState[37] || this.keyState[65]){
            this.getCurrentPlayer()!.move(Direction.LEFT, this.dimension);
        }
        if (this.keyState[39] || this.keyState[68]){
            this.getCurrentPlayer()!.move(Direction.RIGHT, this.dimension);
        }
        this.redrawCanvas();
        requestAnimationFrame(() => this.gameLoop);
    }
    public redrawCanvas(): void {
        var c = <HTMLCanvasElement>document.getElementById("boardarea");
        var ctx = c.getContext("2d")!;
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.dimension.width, this.dimension.height);
        this.players.forEach(player => {
            player.draw();
        });
        this.flags.forEach(flag => {
            flag.draw();
        });
    }

    // public checkOverlap() {
    //     this.players.forEach(player =>{
    //         this.flags.forEach(flag => {
    //             if(player.position.x > flag.position.x + flag.dimension.height
    //                 || player.position.x + 50 < flag.position.x + flag.dimension.x)
    //         })
    //     });
    // }
}