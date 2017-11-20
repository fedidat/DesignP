using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shittylympics
{
    public abstract class Game
    {
        public Game(Player playerA, Player playerB)
        {
            this.playerA = playerA;
            this.playerB = playerB;

            Actions = new List<IGameAction>();
        }

        protected Player playerA, playerB;

        protected List<IGameAction> Actions { get; set; }

        public abstract void Run();

        protected void GaemeOver(Player winner)
        {
            Console.WriteLine(winner.Name);
        }
    }
}
