package sRobotics;

import sRobotics.core.*;

public class Main {

    public static void main(String[] args)
    {
        Context ctx = new Context();

        sRobotics.drone.Reciever testRobot1 = new sRobotics.drone.Reciever();

        ctx.ChangeRobot(testRobot1);

        ctx.TurnOn();

    }
}
