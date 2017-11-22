package com.fedidat;

public abstract class Machine {
    public String name;
    public abstract String getType();

    public abstract void on() {
        System.out.println(this.getType() + this.name + "turned on");
    }
    public abstract void off() {
        System.out.println(this.getType() + this.name + "turned off");
    }
    public void move(DirectionEnum) {
        System.out.println(this.getType() + this.name + "moved right");
    }
}
