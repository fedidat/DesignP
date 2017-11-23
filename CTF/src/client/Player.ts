import { Point } from "./Point";
import { Dimension } from "./Dimension";
import { Graphics } from "./Graphics";
import { Direction } from "./Direction";
import { Input } from "./Input";

export class Player {
    username: string;
    position: Point;
    id: number;
    pawnFile: string;
    dimension: Dimension;
    speed: number;
    frames: number;
    image: HTMLImageElement;
    public done: boolean = false;

    static startingPoints: Point[] = [
        new Point(0,0),
        new Point(1,1),
        new Point(0,1),
        new Point(1,0),
        new Point(0.5,0),
        new Point(0,0.5),
        new Point(0.5,1),
        new Point(1,0.5),
    ];

	constructor(username: string, id: number, boardDimensions: Dimension) {
        this.username = username;
        this.id = id;
        var fileIndex: number = this.id + 1;
        this.pawnFile = "image/" + fileIndex + "h.png";
        var playerX: number = Player.startingPoints[this.id].x * boardDimensions.width;
        var playerY: number = Player.startingPoints[this.id].y * boardDimensions.height;
        this.position = new Point(playerX, playerY);
        this.dimension = new Dimension(50, 50);
        this.speed = 10;
        this.frames = 16;
        this.image = new Image();
        this.image.src = this.pawnFile;
        this.image.onload = () => this.done = true;
    }

    public draw(graphics: Graphics): void {
        if(this.done) {
            graphics.drawImage(this.image, this.position, new Dimension(50, 50));
        }
    }

    public move(direction: Direction, canvasDimension: Dimension): void {
        var dy: number = 10, dx: number = 10;
        if(Input.directionStatus(Direction.LEFT)) {
            if (this.position.x - dx > 0) {
                this.position.x -= dx;
            }
        }
        else if(Input.directionStatus(Direction.RIGHT)) {
            if (this.position.x + dx < canvasDimension.width) {
                this.position.x += dx;
            }
        }
        else if(Input.directionStatus(Direction.UP)) {
            if (this.position.y - dy > 0) {
                this.position.y -= dy;
            }
        }
        else if(Input.directionStatus(Direction.DOWN)) {
            if (this.position.y + dy < canvasDimension.height) {
                this.position.y += dy;
            }
        }
    }
}