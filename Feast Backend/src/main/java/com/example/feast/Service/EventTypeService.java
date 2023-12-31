package com.example.feast.Service;


import com.example.feast.Entity.EventType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EventTypeService {

    List<EventType> getALl();
}