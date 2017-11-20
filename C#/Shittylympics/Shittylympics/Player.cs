using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shittylympics
{
    public abstract class Player : IZugOrPeretPlay
    {
        public Player(string name)
        {
            Name = name;
        }

        public string Name { get; private set; }

        public abstract bool LetPlayerChoosIfZug();
        public abstract int AskForPlayerValue();
    }
}
