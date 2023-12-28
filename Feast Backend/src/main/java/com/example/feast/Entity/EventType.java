package com.example.feast.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="eventType")
public class EventType {
    private Event birthday;

    private Event anniversary;

    private Event affordable;

    private Event economical;

    private Event premium;
}
