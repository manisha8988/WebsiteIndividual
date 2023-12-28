package com.example.feast.Pojo;

import com.example.feast.Entity.Event;
import com.example.feast.Entity.User;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
public class EventPojo {

    private Long id;

    @OneToOne
    @JoinColumn(name="event_type")
    private Event event_type;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    @NotNull
    private String eventDescription;

    @NotNull
    private Integer eventPrice;

    @NotNull
    private Date eventDateTime;
}
