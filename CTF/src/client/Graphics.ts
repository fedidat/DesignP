import { Point } from "./Point";
import { Dimension } from "./Dimension";

export class Graphics {
    private canvasId: string = "boardarea";
    public color: string = "Lightgrey";
    public dimension: Dimension = new Dimension(800, 400);

    constructor(canvasId: string, color: string, dimension: Dimension) {
        this.canvasId = canvasId;
        this.color = color;
        this.dimension = dimension;
    }

    public drawImage(image: HTMLImageElement, position: Point, dimension: Dimension): void {
        var c = <HTMLCanvasElement>document.getElementById(this.canvasId);
        var ctx = c.getContext("2d");
        ctx!.drawImage(image, position.x, position.y, dimension.width, dimension.height);
    }

    public clearTheBoard() {
        var c = <HTMLCanvasElement>document.getElementById("boardarea");
        var ctx = c.getContext("2d")!;
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.dimension.width, this.dimension.height);
    }

    public prepareBoard(): void {
        $('#boardarea').attr('width', this.dimension.width + 50).attr('height', this.dimension.height + 50);
        $("#boardarea").css("background-color", this.color);
        $("#boardarea").css("z-index", -1);
    }
}