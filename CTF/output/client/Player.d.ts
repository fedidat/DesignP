import { Point } from "./Point";
export declare class Player {
    username: String;
    position: Point;
    id: number;
    flagFile: String;
    pawnFile: String;
    static startingPoints: Point[];
    constructor(username: String, id: number);
}
