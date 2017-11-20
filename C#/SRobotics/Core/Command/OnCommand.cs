using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Command
{
    public class OnCommand : Commandable<State.ActivationStateType>
    {
        public void Execute(Robot context, State.ActivationStateType type)
        {
            context.State.ActivationState.Change(type);

            context.Commands.SayHello.Execute();
        }
    }
}
