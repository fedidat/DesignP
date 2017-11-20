using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class RobotState
    {
        public RobotState()
        {
            ActivationState = new State.ActivationState();
        }

        public State.ActivationState ActivationState { get; private set; }
    }
}
