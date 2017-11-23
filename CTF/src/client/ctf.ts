import { CtfBoard } from './CtfBoard';
import { Player } from './Player';
import * as Cookies from 'es-cookie';

Cookies.set('name', 'value');
Cookies.get('name'); // => 'value' 

(() => {
    var username: string = Cookies.get("user")!;
    var board: CtfBoard = new CtfBoard(username);
    board.prepareBoard();
    
    if(Cookies.get("user")) {
        board.addPlayer(username);
    }
    board.addPlayer("robot 1");
    board.addPlayer("robot 2");

    var handleKeyDown = (e: KeyboardEvent) => { board.doKeyDown(e); }
    var handleKeyUp = (e: KeyboardEvent) => { board.doKeyUp(e); }

    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('keyup', handleKeyUp, true);
})();