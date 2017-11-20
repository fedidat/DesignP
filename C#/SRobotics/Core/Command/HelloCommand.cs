using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Command
{
    public class HelloCommand : Commandable
    {
        public void Execute()
        {
            Console.WriteLine("Hello Robot :)");
        }
    }
}
