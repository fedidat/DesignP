package com.fedidat.log.observers;

import com.fedidat.LogLevel;
import com.fedidat.LogMessage;

import java.util.Observable;
import java.util.Observer;

public class MailContact implements Observer {

    private String name;
    private LogLevel level;

    public MailContact(String name, LogLevel level) {
        this.name = name;
        this.level = level;
    }

    @Override
    public void update(Observable observable, Object o) {
        LogMessage logMessage = (LogMessage)o;
        if(logMessage.getLevel().ordinal() >= this.level.ordinal())
            System.out.println("Mail sent to " + this.name + ": " + logMessage);
    }
}
