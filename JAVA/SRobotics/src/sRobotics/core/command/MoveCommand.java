package sRobotics.core.command;

import sRobotics.core.RobotContext;
import sRobotics.core.state.DirectionType;

public class MoveCommand implements Commandable<DirectionType> {
    @Override
    public void Execute(RobotContext context, DirectionType direction) {
        System.out.println("Moving " + direction);
    }
}
