package com.example.feast.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalTime;
import java.util.Date;
import java.util.List;

import java.util.Set;

@Entity
@Table(name="events")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Event {
    // id 1 ma birthday id 2 ma anniversary
    // yha hmlai payment ne chainxa

    @Id
    @SequenceGenerator(name = "event_seq_gen", sequenceName = "event_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "event_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "event_name")
    private String eventName;

    @OneToMany (fetch = FetchType.LAZY) // sab detials chaiyo  vane eager auta matra chaiyo vane lazyevents
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private List<User> users;

    @Column (name = "contact")
    private Integer contact;

    @Column(name="event_status")
    private Boolean eventStatus;

    @Column(name="event_price", nullable=false)
    private Integer eventPrice;

    @Column(name="event_date", nullable=false)
    private Date eventDate;

    @Column(name="event_time", nullable = false)
    private LocalTime eventTime;

    @Column(name="noOfGuest" , nullable = false)
    private Integer noOfGuest;

    @Column(name="specialRequest")
    private String specialRequest;


//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(
//            name = "event_user",
//            joinColumns = @JoinColumn(name = "event_id"),
//            inverseJoinColumns = @JoinColumn(name = "user_id")
//    )
//    private Set<User> users;



}