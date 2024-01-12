package com.example.feast.exception;

public class TableAlreadyReservedException extends RuntimeException {

    public TableAlreadyReservedException(String message) {
        super(message);
    }
}
