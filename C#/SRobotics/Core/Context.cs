using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class Context
    {
        public Robot CurrentRobot { get; private set; }

        public void ChangeRobot(Robot robot)
        {
            CurrentRobot = robot;
        }

        public void TurnOn()
        {
            CurrentRobot.ChangeActivationState(State.ActivationStateType.On);
        }

        public void TurnOff()
        {
            CurrentRobot.ChangeActivationState(State.ActivationStateType.Off);
        }
    }
}
