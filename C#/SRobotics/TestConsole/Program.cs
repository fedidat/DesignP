using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            var ctx = new Core.Context();

            var testRobot1 = new Drone.Reciever();

            ctx.ChangeRobot(testRobot1);

            ctx.TurnOn();
        }
    }
}
