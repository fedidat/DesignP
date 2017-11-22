package com.fedidat.log.observers;

import com.fedidat.LogMessage;

import java.util.Observable;
import java.util.Observer;

public class ConsoleLogger implements Observer {
    @Override
    public void update(Observable observable, Object o) {
        LogMessage logMessage = (LogMessage)o;
        System.out.println("Printing log to console: " + logMessage);
    }
}
