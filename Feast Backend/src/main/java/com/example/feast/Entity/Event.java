package com.example.feast.Entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="events")

public class Event {

    @Id
    @SequenceGenerator(name = "item_seq_gen", sequenceName = "item_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "item_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;
    @OneToOne
    @JoinColumn(name="event_type")
    private Event event_type;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    @Column(name="event_description")
    private String event_description;

    @Column(name="event_price", nullable=false)
    private Integer event_price;

    @Column(name="event_date_time", nullable=false)
    private Date event_date_time;


}
