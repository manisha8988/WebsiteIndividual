package com.example.feast.Pojo;
import com.example.feast.Entity.User;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Timer;

@Getter
@Setter
public class EventPojo {

    private Long id;

    @OneToOne
    @JoinColumn(name="user_id" , referencedColumnName = "first_name")
    private User user;

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

}