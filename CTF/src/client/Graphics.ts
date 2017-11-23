import { Point } from "./Point";
import { Dimension } from "./Dimension";

export class Graphics {
    private static canvasId: string = "boardarea";

    public static drawImage(filePath: string, position: Point, dimension: Dimension): void {
        var c = <HTMLCanvasElement>document.getElementById(Graphics.canvasId);
        var ctx = c.getContext("2d");
        var img = new Image();
        img.src = filePath;
        img.onload = () => ctx!.drawImage(img, position.x, position.y, dimension.width, dimension.height);
    }
}