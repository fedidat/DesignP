package com.fedidat.log.observers;

import com.fedidat.Log;
import com.fedidat.LogMessage;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Observable;
import java.util.Observer;

public class LocalFS implements Observer {
    String relativeFileName;

    public LocalFS() {
        this("log.txt");
    }

    public LocalFS(String relativeFileName) {
        this.relativeFileName = relativeFileName;
    }

    @Override
    public void update(Observable observable, Object o) {
        LogMessage logMessage = (LogMessage)o;
        String messageStr = logMessage.toString() + "\n";
        try {
            Files.write(Paths.get(relativeFileName), messageStr.getBytes(), StandardOpenOption.CREATE, StandardOpenOption.APPEND);
        } catch (IOException e) {
            Log log = new Log();
            log.error("IO error in LocalFS: " + e.getMessage());
        }
    }
}
