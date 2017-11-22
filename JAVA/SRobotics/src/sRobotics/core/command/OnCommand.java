package sRobotics.core.command;

import sRobotics.core.Robot;
import sRobotics.core.RobotContext;
import sRobotics.core.state.ActivationStateType;

public class OnCommand implements Commandable<ActivationStateType>
{
    public void Execute(RobotContext context, ActivationStateType type)
    {
        context.getState().activationState.Change(context, type);
    }
}
