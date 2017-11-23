import {Player} from './Player';
import { Point } from './Point';
import { Dimension } from './Dimension';
import { Graphics } from './Graphics';

export class Flag {
    public position: Point;
    public player: Player | undefined;
    public dimension: Dimension;
    public flagFile: string;

	constructor(position: Point, dimension: Dimension, playerId?: number) {
		this.position = position;
        this.player = undefined;
        this.dimension = dimension;
        this.flagFile = playerId ? "image/" + playerId + ".png" : "image/blankf.png";
    }
    
    public conquer(byPlayer: Player) {
        this.player = byPlayer;
    }

    public draw() {
        Graphics.drawImage(this.flagFile, this.position, this.dimension);
    }

    
}