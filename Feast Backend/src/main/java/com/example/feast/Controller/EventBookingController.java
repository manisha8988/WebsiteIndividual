package com.example.feast.Controller;
import com.example.feast.Entity.Event;
import com.example.feast.Entity.EventBooking;
import com.example.feast.Pojo.EventBookingPojo;
import com.example.feast.Pojo.EventPojo;
import com.example.feast.Service.EventBookingService;
import com.example.feast.Service.EventService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequiredArgsConstructor
@RequestMapping("/eventBooking")
public class EventBookingController {
    private final EventBookingService eventBookingService;

    @PostMapping(value="/save")
    public String saveEventBooking(@Valid @RequestBody EventBookingPojo eventBookingPojo){
        eventBookingService.saveEvent(eventBookingPojo);
        return "Saved";
    }

    @GetMapping("/getAll")
    public List<EventBooking> getALl() {
        return eventBookingService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<EventBooking> getById(@PathVariable("id") Long id) {
        return this.eventBookingService.getById(id);
    }
    @PutMapping("/update/{id}")
    public  String update(@PathVariable("id") Integer id){
        return this.eventBookingService.update(Long.valueOf(id), new EventBookingPojo());
    }
}


