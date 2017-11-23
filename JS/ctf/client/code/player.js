
function Player(id, controls)
{
    function movePlayer()
    {
        /*switch (key)
        {
            case 'ArrowUp': self.move(0, -1); break;
            case 'ArrowDown': self.move(0, 1); break;
            case 'ArrowRight': self.move(1, 0); break;
            case 'ArrowLeft': self.move(-1, 0); break;
        }*/

        /*if (controls.up.indexOf(key) > -1)
        {
            self.move(0, -1);
        }
        else if (controls.down.indexOf(key) > -1)
        {
            self.move(0, 1);
        }
        else if (controls.right.indexOf(key) > -1)
        {
            self.move(1, 0);
        }
        else if (controls.left.indexOf(key) > -1)
        {
            self.move(-1, 0);
        }*/

        //controls.handle(key, self.move);

        controls.handle(key, function(x, y)
        {
            self.move(x, y);
        });
    }

    var self = this;
    var element = document.querySelector('div.player.' + id);
    var key;
    var intervalId;

    //console.dir(element);

    this.run = function(event)
    {
        if (controls.handle(event.code))
        {
            key = event.code;
        }

        if (!intervalId)
        {
            intervalId = setInterval(movePlayer, 10);
        }
        
        //console.log(event)
        
    };

    this.move = function(x, y)
    {
        element.style.left = (element.offsetLeft + x) + 'px';
        element.style.top = (element.offsetTop + y) + 'px';
    };

    this.stop = function()
    {
        clearInterval(intervalId);
    };
}