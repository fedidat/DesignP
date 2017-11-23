import { Dimension } from "./Dimension";
import { Point } from "./Point";

export class Sprite{

    pos: Point;
    size: Dimension;
    speed: number;
    frames: number;
    _index: number;
    url: string;
    once: boolean;
    done: boolean;
    dir: string;

    constructor(pos: Position, size: Dimension, speed: number, frames:number, url: string, once: boolean) {
        this.pos = pos;
        this.dir
        this.size = size;
        this.speed = typeof speed === 'number' ? speed : 0;
        this.frames = frames;
        this._index = 0;
        this.url = url;
        this.once = once;
    }

    public update(dt): void {
        this._index += this.speed*dt;
    }

    public render(ctx): void {

        var frame;
    
        if(this.speed > 0) {
            var max = this.frames.length;
            var idx = Math.floor(this._index);
            frame = this.frames[idx % max];
    
            if(this.once && idx >= max) {
                this.done = true;
                return;
            }
        }
        else {
            frame = 0;
        }
    
    
        var x = this.pos.x;
        var y = this.pos.y;
    
        if(this.dir == 'vertical') {
            y += frame * this.size[1];
        }
        else {
            x += frame * this.size[0];
        }
    
        ctx.drawImage(this.url,
                      x, y,
                      this.size.width, this.size.height,
                      0, 0,
                      this.size.width, this.size.height);
    }
}