using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class RobotCommands
    {
        public RobotCommands()
        {
            TurnOn = new Command.OnCommand();
            SayHello = new Command.HelloCommand();
        }

        public Command.OnCommand TurnOn { get; set; }
        public Command.HelloCommand SayHello { get; set; }
    }
}
