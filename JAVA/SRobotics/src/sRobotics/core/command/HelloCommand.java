package sRobotics.core.command;

import sRobotics.core.RobotContext;

public class HelloCommand implements EmptyCommandable
{
    public void Execute(RobotContext context)
    {
        System.out.print("hello robot :)\n");
    }
}
