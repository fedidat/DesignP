using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shittylympics
{
    class Program
    {
        static void Main(string[] args)
        {
            var players = new List<Player>()
            {
                new HumanPlayer("Alice"),
                new AiPlayer("Bob")
            };

            var game1 = new ZugOrPeret(players[0], players[1]);

            game1.Run();
        }
    }
}
