import { Point } from "./Point";
import { Dimension } from "./Dimension";
import { Graphics } from "./Graphics";
import { Direction } from "./Direction";

export class Player {
    username: string;
    position: Point;
    id: number;
    pawnFile: string;

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
    }

    public draw(): void {
        Graphics.drawImage(this.pawnFile, this.position, new Dimension(50, 50));
    }

    
    // switch (keyEvent.keyCode) {
    //     case 38: // Up arrow
    //     case 87: // W
    //         if (this.position.y - dy > 0) {
    //             this.position.y -= dy;
    //         }
    //         break;
    //     case 40: // Down arrow
    //     case 83: // S
    //         if (this.position.y + dy < canvasDimension.height) {
    //             this.position.y += dy;
    //         }
    //         break;
    //     case 37: // Left arrow
    //     case 65: // A
    //         if (this.position.x - dx > 0) {
    //             this.position.x -= dx;
    //         }
    //         break;
    //     case 39: // Right arrow
    //     case 68: // D
    //         if (this.position.x + dx < canvasDimension.width) {
    //             this.position.x += dx;
    //         }
    //         break;
    // }
    public move(direction: Direction, canvasDimension: Dimension): void {
        var dy: number = 10, dx: number = 10;
        switch(direction) {
            case Direction.LEFT:
                if (this.position.x - dx > 0) {
                    this.position.x -= dx;
                }
                break;
            case Direction.RIGHT:
                if (this.position.x + dx < canvasDimension.width) {
                    this.position.x += dx;
                }
                break;
            case Direction.UP:
                if (this.position.y - dy > 0) {
                    this.position.y -= dy;
                }
                break;
            case Direction.DOWN:
                if (this.position.y + dy < canvasDimension.height) {
                    this.position.y += dy;
                }
        }
    }
}