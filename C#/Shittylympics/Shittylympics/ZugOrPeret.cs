using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shittylympics
{
    public class ZugOrPeret : Game
    {
        public ZugOrPeret(Player playerA, Player playerB)
            : base(playerA, playerB)
        {
            
        }

        public override void Run()
        {
            var playerAzug = playerA.LetPlayerChoosIfZug();

            var playerAvalue = playerA.AskForPlayerValue();
            var playerBvalue = playerB.AskForPlayerValue();

            var sum = playerAvalue + playerBvalue;

            Console.WriteLine(sum);

            GaemeOver(sum % 2 == 0 && playerAzug ? playerA : playerB);

            /*if (sum % 2 == 0 && playerAzug)
            {
                // playerA is the winner
            }
            else
            {
                // playerA is the winner
            }*/
        }
    }
}
