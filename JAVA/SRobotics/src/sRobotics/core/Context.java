package sRobotics.core;

import sRobotics.core.state.ActivationStateType;

public class Context
{
    public Robot currentRobot;

    public void ChangeRobot(Robot robot)
    {
        currentRobot = robot;
    }

    public void TurnOn()
    {
        currentRobot.ChangeActivationState(ActivationStateType.on);
    }

    public void TurnOff()
    {
        currentRobot.ChangeActivationState(ActivationStateType.off);
    }
}
