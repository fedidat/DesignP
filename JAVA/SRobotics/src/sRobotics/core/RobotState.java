package sRobotics.core;

import sRobotics.core.state.ActivationState;

public class RobotState
{
    public RobotState()
    {
        activationState = new ActivationState();
    }

    public ActivationState activationState;
}
