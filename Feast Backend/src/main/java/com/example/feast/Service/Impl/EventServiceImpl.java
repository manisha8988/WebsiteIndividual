package com.example.feast.Service.Impl;
import com.example.feast.Entity.Event;
import com.example.feast.Entity.EventType;
import com.example.feast.Entity.User;
import com.example.feast.Pojo.EventPojo;
import com.example.feast.Repo.EventRepo;
import com.example.feast.Repo.EventTypeRepo;
import com.example.feast.Repo.UserRepo;
import com.example.feast.Service.EventService;
import com.sun.jdi.request.EventRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor

public class EventServiceImpl implements EventService {

    private final EventRepo eventRepo;
    private UserRepo userRepo;
    private final EventTypeRepo eventTypeRepo;
//    private final BookingMapper bookingMapper;


//    public EventServiceImpl(EventRepo eventRepo, EventTypeRepo eventTypeRepo, UserRepo userRepository, BookingMapper bookingMapper) {
//        this.eventRepo = eventRepo;
//        this.eventTypeRepo = eventTypeRepo;
//        this.userRepo = userRepo;
//        this.bookingMapper = bookingMapper;
//    }


//    @Override
//    public Integer saveEvent(EventRequest eventRequest) {
//        EventType eventType= eventTypeRepo.findById(eventBookingRequest.getEventTypeId()).orElseThrow(()-> new ResourceNotFoundException("Invalid item id"));
//        User user = userRepo.findByUsername(eventRequest.getUserName()).orElseThrow(()->new ResourceNotFoundException("Invalid customer id"));
//        if(eventType.getAvailableQuantity()<eventRequest.getQuantity()){
//            throw new ResourceNotFoundException("Available quantity is less than request quantity");
//        }
//        try{
////            Double totalPrice = itemEntity.getPrice()*bookingRequest.getQuantity();
////            itemEntity.setAvailableQuantity(itemEntity.getAvailableQuantity()-bookingRequest.getQuantity());
////            itemRepo.save(itemEntity);
//            Event event = event.builder()
//                    .status(EventEnum.PENDING)
//                    .eventType(eventRequest.geEventType())
//                    .user(user)
//                    .eventType(eventType)
//                    .eventPrice(eventPrice)
//                    .build();
//            return Math.toIntExact(eventRepo.save(event).getId());
//        }catch (Exception ex){
//            throw new ResourceNotFoundException(ex.getMessage());
//        }
//    }


    public EventServiceImpl(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    @Override
    public void saveEvent(EventPojo eventPojo) {

    }

    @Override
    public List<Event> getEvent() {
        return null;
    }

    @Override
    public Integer cancelEvent(Long id) {
        return null;
    }

//    @Override
//    public List<EventEnum> getEventEnums() {
//        return null;
//    }
//
//    @Override
//    public List<EventProjection> getEventById(Long id) {
//        return null;
//    }

    @Override
    public Integer updateEvent(EventRequest eventRequest) {
        return null;
    }

//    @Override
//    public List<EventEnum> getEventEnums() {
//        return null;
//    }
//
//    @Override
//    public List<EventProjection> getEventById(Long id) {
//        return null;
//    }


//    @Override
//    public List<EventBookingEnum> getEventEnums() {
//            return Arrays.stream(EventEnum.values()).toList();
//    }
//
//    @Override
//    public List<EventProjection> getEventById(Long id) {
//        return null;
//    }
//
//    @Override
//    public Integer updateEvent(EventRequest eventRequest) {
//        return null;
//    }
//
//    @Override
//    public Integer updateEvent(EventRequest eventRequest) {
//        return null;
//    }
//
//    @Override
//    public List<EventProjection> getEventBookingById(Integer id) {
//        Event event = eventRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Invalid booking id"));
//        return eventRepo.getEventById(event.getId());
//    }



}

