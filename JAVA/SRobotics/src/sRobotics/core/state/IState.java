package sRobotics.core.state;

public interface IState<T>
{
    void Change(T value);
}
