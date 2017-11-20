using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public abstract class Robot
    {
        public Robot()
        {
            Commands = new RobotCommands();
            State = new RobotState();
        }

        public RobotState State { get; private set; }
        public RobotCommands Commands { get; private set; }

        public void ChangeActivationState(State.ActivationStateType type)
        {
            Commands.TurnOn.Execute(this, type);
            //State.ActivationState.Change(type);
        }


        /*public enum ActivationState
        {
            On,
            Off
        }


        private ActivationState activationState;

        public void ChangeActivationState(ActivationState state)
        {
            activationState = state;
        }*/
    }
}
