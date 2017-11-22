package com.fedidat;

import java.util.Observable;

public class Log extends Observable {
    public void log(String message, LogLevel level) {
        this.setChanged();
        this.notifyObservers(new LogMessage(message, level));
    }

    public void info(String message) {
        this.log(message, LogLevel.INFO);

    }
    public void warning(String message) {
        this.log(message, LogLevel.WARNING);

    }
    public void error(String message) {
        this.log(message, LogLevel.ERROR);
    }
}
