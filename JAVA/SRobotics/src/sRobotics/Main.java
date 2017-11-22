package sRobotics;

import sRobotics.core.*;
import sRobotics.drone.EmulationRobot;

public class Main {

    public static void main(String[] args)
    {
        ClientContext ctx = new ClientContext();

        EmulationRobot testRobot1 = new EmulationRobot();

        ctx.ChangeRobot(testRobot1);

        ctx.TurnOn();

    }
}
