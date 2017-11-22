package sRobotics.core.state;

import sRobotics.core.RobotContext;

public interface IState<T>
{
    void Change(RobotContext context, T value);
}
