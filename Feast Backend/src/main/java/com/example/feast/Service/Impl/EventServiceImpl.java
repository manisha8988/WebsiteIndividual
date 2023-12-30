package com.example.feast.Service.Impl;
import com.example.feast.Entity.Event;
import com.example.feast.Pojo.EventPojo;
import com.example.feast.Repo.EventRepo;
import com.example.feast.Service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class EventServiceImpl implements EventService {

    private final EventRepo eventRepo;

    public EventServiceImpl(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    @Override
    public void saveEventBooking(EventPojo eventPojo) {
        Event event = new Event();
        eventRepo.save(event);
    }

    @Override
    public List<Event> getALl() {
        return this.eventRepo.findAll();
    }

}

