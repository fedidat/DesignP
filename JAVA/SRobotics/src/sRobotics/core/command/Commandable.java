package sRobotics.core.command;

import sRobotics.core.Robot;

public interface Commandable<T>
{
    void Execute(Robot context, T options);
}
