package com.fedidat;

import com.fedidat.log.observers.ConsoleLogger;
import com.fedidat.log.observers.LocalFS;
import com.fedidat.log.observers.MailContact;

public class Main {

    public static void main(String[] args) {
        Log logger = new Log();
        logger.addObserver(new MailContact("Support", LogLevel.INFO));
        logger.addObserver(new MailContact("Dev", LogLevel.WARNING));
        logger.addObserver(new MailContact("Manager", LogLevel.ERROR));
        logger.addObserver(new ConsoleLogger());
        logger.addObserver(new LocalFS());

        logger.info("Some info...");
        System.out.println();
        logger.warning("A warning.");
        System.out.println();
        logger.error("AN ERROR!");
    }
}
