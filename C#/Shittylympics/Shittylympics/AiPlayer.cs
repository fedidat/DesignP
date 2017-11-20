using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shittylympics
{
    public class AiPlayer : Player
    {
        static AiPlayer()
        {
            random = new Random();
        }

        private static Random random;

        public AiPlayer(string name) : base(name) { }

        public override bool LetPlayerChoosIfZug()
        {
            return Convert.ToBoolean(random.Next(2));
        }

        public override int AskForPlayerValue()
        {
            return random.Next(5) + 1;
        }
    }
}
