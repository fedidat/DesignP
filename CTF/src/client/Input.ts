import { Direction } from './Direction';

export class Input {
    public static pressedKeys: boolean[] = [];

    private static setKey(event: KeyboardEvent, status: boolean) {
        var code = event.keyCode;
        var key: Direction;

        switch(code) {
        case 37:
            key = Direction.LEFT; break;
        case 38:
            key = Direction.UP; break;
        case 39:
            key = Direction.RIGHT; break;
        case 40:
            key = Direction.DOWN; break;
        }

        Input.pressedKeys[key!] = status;
    }

    public static setupInput(): void {
        document.addEventListener('keydown', function(e) {
            Input.setKey(e, true);
        });

        document.addEventListener('keyup', function(e) {
            Input.setKey(e, false);
        });

        window.addEventListener('blur', function() {
            Input.pressedKeys = [];
        });
    }

    public static directionStatus(direction: Direction) {
        return Input.pressedKeys[direction];
    }
}