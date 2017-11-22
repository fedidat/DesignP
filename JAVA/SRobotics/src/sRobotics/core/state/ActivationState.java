package sRobotics.core.state;

import sRobotics.core.RobotContext;

public class ActivationState implements IState<ActivationStateType>
{
    private ActivationStateType activationState;

    @Override
    public void Change(RobotContext context, ActivationStateType activationState) {
        this.activationState = activationState;

        hello(context);
    }

    private void hello(RobotContext context)
    {
        context.getCommands().sayHello.Execute(context);
    }
}
