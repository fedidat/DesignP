package sRobotics.core.command;

import sRobotics.core.Robot;

public class HelloCommand implements EmptyCommandable
{
    public void Execute(Robot context)
    {
        System.out.print("hello robot :)\n");
    }
}
