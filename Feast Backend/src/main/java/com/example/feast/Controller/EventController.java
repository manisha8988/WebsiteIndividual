package com.example.feast.Controller;
import com.example.feast.Entity.Event;
import com.example.feast.Pojo.EventPojo;
import com.example.feast.Service.EventService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequiredArgsConstructor
@RequestMapping("/event")
public class EventController {
    private final EventService eventService;

    @PostMapping(value="/save")
    public String saveEvent(@Valid @RequestBody EventPojo eventPojo){
        eventService.saveEvent(eventPojo);
        return "Saved";
    }

    @GetMapping("/getAll")
    public List<Event> getALl() {
        return eventService.getALl();
    }

    @GetMapping("/getById/{id}")
    public Optional<Event> getById(@PathVariable("id") Long id) {
        return this.eventService.getById(id);
    }
    @PutMapping("/update/{id}")
    public  String update(@PathVariable("id") Integer id){
        return this.eventService.update(Long.valueOf(id), new EventPojo());
    }
}


