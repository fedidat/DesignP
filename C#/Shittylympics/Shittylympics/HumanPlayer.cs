using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shittylympics
{
    public class HumanPlayer : Player
    {
        public HumanPlayer(string name) : base(name) { }

        public override bool LetPlayerChoosIfZug()
        {
            Console.WriteLine("{0}: Press enter for zug, otherwize - peret", Name);

            var result = Console.ReadLine();

            return result.Length == 0;
        }

        public override int AskForPlayerValue()
        {
            Console.WriteLine("{0}: Enter value", Name);

            var result = Console.ReadLine();

            return int.Parse(result);
        }
    }
}
