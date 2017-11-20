package sRobotics.core;

import sRobotics.core.command.*;

public class RobotCommands
{
    public RobotCommands()
    {
        turnOn = new OnCommand();
        sayHello = new HelloCommand();
    }

    public OnCommand turnOn;
    public HelloCommand sayHello;
}
