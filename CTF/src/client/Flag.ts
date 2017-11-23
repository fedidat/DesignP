import {Player} from './Player';
import { Point } from './Point';
import { Dimension } from './Dimension';
import { Graphics } from './Graphics';

export class Flag {
    public position: Point;
    public player: Player | undefined;
    public dimension: Dimension;
    public flagFile: string;
    public image: HTMLImageElement;
    public done: boolean = false;

	constructor(position: Point, dimension: Dimension, playerId?: number) {
		this.position = position;
        this.player = undefined;
        this.dimension = dimension;
        this.flagFile = playerId ? "image/" + playerId + ".png" : "image/blankf.png";
        this.image = new Image();
        this.image.src = this.flagFile;
        this.image.onload = () => this.done = true;
    }
    
    public conquer(byPlayer: Player) {
        this.player = byPlayer;
    }

    public draw(graphics: Graphics) {
        if(this.done) {
            graphics.drawImage(this.image, this.position, this.dimension);
        }
    }    
}