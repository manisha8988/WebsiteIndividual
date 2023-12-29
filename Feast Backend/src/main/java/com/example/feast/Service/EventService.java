package com.example.feast.Service;

import com.example.feast.Entity.Event;
import com.example.feast.Pojo.EventPojo;

import java.util.List;

public interface EventService {
    void saveEventBooking(EventPojo eventPojo);

    List<Event> getALl();
}
