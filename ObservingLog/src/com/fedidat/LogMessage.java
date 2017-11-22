package com.fedidat;

import java.util.Date;

public class LogMessage {
    private String message;
    private LogLevel level;

    public String getMessage() {
        return message;
    }

    public LogLevel getLevel() {
        return level;
    }

    public LogMessage(String message, LogLevel level) {
        this.message = message;
        this.level = level;
    }

    @Override
    public String toString() {
        return "Log of level " + this.level + ": " + this.message;
    }
}
