package sRobotics.core.command;

import sRobotics.core.Robot;
import sRobotics.core.state.ActivationStateType;

public class OnCommand implements Commandable<ActivationStateType>
{
    public void Execute(Robot context, ActivationStateType type)
    {
        context.getState().activationState.Change(type);

        context.getCommands().sayHello.Execute(context);
    }
}
