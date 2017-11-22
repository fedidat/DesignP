package sRobotics.core;

public class RobotContext {

    public RobotContext()
    {
        commands = new RobotCommands();
        state = new RobotState();
    }

    private RobotState state;
    private RobotCommands commands;

    public RobotCommands getCommands() { return commands; }
    public RobotState getState() { return state; }
}
