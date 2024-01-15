package com.example.feast.Pojo;
import com.example.feast.Entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Timer;

import java.util.Set;

@Getter
@Setter
public class EventPojo {

    private Long id;


    @OneToOne
    @JoinColumn(name="user_id" , referencedColumnName = "first_name")
    private User user;
    @NotNull
    private Integer eventPrice;

    @NotNull
    private Boolean eventStatus;

    @NotNull
    private Integer contact;

    @NotNull
    private String eventName;

    @NotNull
    private String eventStatus;

    @NotNull
    private Integer eventPrice;

    @NotNull
    private Date eventDate;

    @NotNull
    private Timer eventTime;

    @NotNull
    private Integer noOfGuest;

    private String specialRequest;

    //    @NotNull
//    private String eventImage;

//    @NotNull
//    private String eventDescription;

    private Date eventDateTime;

<<<<<<< HEAD

=======
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "event_user",
            joinColumns = @JoinColumn(name = "event_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private Set<User> users;

    //    @NotNull
//    private String eventImage;
//
//    @NotNull
//    private String eventDescription;
>>>>>>> 11bfc64d8c646bcc5c1a90cd88702b86a354e570
}