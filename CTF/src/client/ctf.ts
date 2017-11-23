import { CtfBoard } from './CtfBoard';
import { Player } from './Player';
import * as Cookies from 'es-cookie';
import { Input } from './Input';

(() => {
    var username: string = Cookies.get("user")!;
    var board: CtfBoard = new CtfBoard(username);
    
    if(Cookies.get("user")) {
        board.addPlayer(username);
    }
    // board.addPlayer("robot 1");
    // board.addPlayer("robot 2");

    Input.setupInput();
    // window.addEventListener('keydown', e => board.doKeyDown(e), true);
})();