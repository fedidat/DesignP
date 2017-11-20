package sRobotics.core;

import sRobotics.core.state.ActivationStateType;

public class Robot
{
    public Robot()
    {
        commands = new RobotCommands();
        state = new RobotState();
    }

    private RobotState state;
    private RobotCommands commands;

    public RobotCommands getCommands() { return commands; }
    public RobotState getState() { return state; }

    public void ChangeActivationState(ActivationStateType type)
    {
        getCommands().turnOn.Execute(this, type);
    }
}
