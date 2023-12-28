package com.example.feast.Service.Impl;
import com.example.feast.Entity.Event;
import com.example.feast.Pojo.EventPojo;
import com.example.feast.Repo.EventRepo;
import com.example.feast.Service.EventService;
import org.springframework.stereotype.Service;

@Service
public class EventServiceImpl implements EventService {

    private final EventRepo eventRepo;

    @Override
    public String saveEventBooking(EventPojo eventPojo) {
        Event event =new Event();

        eventRepo.save(event);
        return "Saved";

    }
}
