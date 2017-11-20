package sRobotics.core.state;

public class ActivationState implements IState<ActivationStateType>
{
    private ActivationStateType activationState;

    @Override
    public void Change(ActivationStateType value)
    {
        activationState = value;
    }
}
