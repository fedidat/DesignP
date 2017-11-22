package sRobotics.core.command;

import sRobotics.core.Robot;
import sRobotics.core.RobotContext;

public interface Commandable<T>
{
    void Execute(RobotContext context, T options);
}
