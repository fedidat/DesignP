package sRobotics.core;

import sRobotics.core.command.*;

public class RobotCommands
{
    public RobotCommands()
    {
        turnOn = new OnCommand();
        sayHello = new HelloCommand();
        moveCommand = new MoveCommand();
    }

    public OnCommand turnOn;
    public HelloCommand sayHello;
    public MoveCommand moveCommand;
}
