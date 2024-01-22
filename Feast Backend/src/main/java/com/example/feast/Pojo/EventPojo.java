package com.example.feast.Pojo;
import com.example.feast.Entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Timer;

@Getter
@Setter
public class EventPojo {

    private Long id;

    private Long user;

    @NotNull
    private Integer eventPrice;

    @NotNull
    private Boolean eventStatus;

    @NotNull
    private Long contact;

    @NotNull
    private String eventName;

    @NotNull
    private Date eventDate;

    @NotNull
    private Timer eventTime;

    @NotNull
    private Integer noOfGuest;

    private String specialRequest;

//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(
//            name = "event_user",
//            joinColumns = @JoinColumn(name = "event_id"),
//            inverseJoinColumns = @JoinColumn(name = "user_id")
//    )
//    private Set<User> users;


}