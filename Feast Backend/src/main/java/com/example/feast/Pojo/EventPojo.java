package com.example.feast.Pojo;

import com.example.feast.Entity.Event;
import com.example.feast.Entity.User;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotNull;

import java.lang.annotation.Native;
import java.util.Date;

public class EventPojo {
    private Long id;
    @OneToOne
    @JoinColumn(name="event_type")
    private Event event_type;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    @NotNull
    private String event_description;
    @NotNull
    private Integer event_price;
    @NotNull
    private Date event_date_time;
}
