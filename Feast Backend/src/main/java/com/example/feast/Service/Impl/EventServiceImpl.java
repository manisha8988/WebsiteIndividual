package com.example.feast.Service.Impl;
import com.example.feast.Entity.*;
import com.example.feast.Pojo.EventPojo;
import com.example.feast.Repo.EventRepo;
import com.example.feast.Repo.UserRepo;
import com.example.feast.Service.EventService;
import com.example.feast.mapper.EventMapper;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor

public class EventServiceImpl implements EventService {

    private final EventRepo eventRepo;
    private UserRepo userRepo;
    private final EventTypeRepo eventTypeRepo;
    private final EventMapper eventMapper;


    public EventServiceImpl(EventRepo eventRepo, EventTypeRepo eventTypeRepo, UserRepo userRepo, EventMapper eventMapper) {
        this.eventRepo = eventRepo;
        this.eventTypeRepo = eventTypeRepo;
        this.userRepo = userRepo;
        this.eventMapper = eventMapper;
    }

    @Override
    public void saveEvent(EventPojo eventPojo) {
        Event event=new Event();

//        event.setName(eventPojo.getName());

        if(eventPojo.getId()!=null){
            event=eventRepo.findById(eventPojo.getId()).get();
        }
        eventRepo.save(event); // insert query
    }
    @Override
    public List<Event> getALl() {
        return this.eventRepo.findAll();
    }

}

