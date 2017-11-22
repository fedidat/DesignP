package sRobotics.core;

import sRobotics.core.state.ActivationStateType;

public class Robot
{
    public Robot()
    {
        context = new RobotContext();
    }

    private RobotContext context;

    public RobotContext getContext() { return context; }

    public void ChangeActivationState(ActivationStateType type)
    {
        this.getContext().getCommands().turnOn.Execute(this.getContext(), type);
    }
}
