using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.State
{
    public enum ActivationStateType
    {
        Off,
        On
    }

    public class ActivationState : IState<ActivationStateType>
    {
        private ActivationStateType activationState;

        /*public void ChangeActivationState(ActivationStateType state)
        {
            activationState = state;
        }*/

        public void Change(ActivationStateType value)
        {
            activationState = value;
        }
    }
}
