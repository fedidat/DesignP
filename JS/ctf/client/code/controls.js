function Controls(up, right, down, left)
{
    function setArray(direction, keys)
    {
        self[direction] = Array.isArray(keys) ? keys : [ keys ];
    }

    var self = this;

    setArray('up', up);
    setArray('right', right);
    setArray('down', down);
    setArray('left', left);

    this.handle = function(key, action)
    {
        var isAction = action instanceof Function;

        if (this.up.indexOf(key) > -1)
        {
            if (isAction) action(0, -1);
            else return true;
        }
        else if (this.down.indexOf(key) > -1)
        {
            if (isAction) action(0, 1);
            else return true;
        }
        else if (this.right.indexOf(key) > -1)
        {
            if (isAction) action(1, 0);
            else return true;
        }
        else if (this.left.indexOf(key) > -1)
        {
            if (isAction) action(-1, 0);
            else return true;
        }
        else
        {
            return false;
        }
    };
}