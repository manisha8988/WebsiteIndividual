package com.example.feast.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

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

    @Column(name = "event_name", unique = true)
    private String eventName;

    @OneToOne( fetch = FetchType.LAZY)
    @JoinColumn(name="user_id" ,  referencedColumnName = "id")
    private User user;

    @Column(name="event_image")
    private String eventImage;

    @Column(name="event_description")
    private String eventDescription; // description ma no. of people ne mention gardena kate jana lai pugxa vanera

    @Column(name="event_status")
    private String eventStatus;

    @Column(name="event_price", nullable=false)
    private Integer eventPrice;

    @Column(name="event_date_time", nullable=false)
    private Date eventDateTime;

<<<<<<< HEAD
//    @Column(name="event_type")
//    private String eventType;


=======
<<<<<<< HEAD
//    private enum EventEnum;
    @Enumerated(EnumType.STRING)
    private EventEnum status;
=======
>>>>>>> 6320447f635d56de4ed4e70b4b3d313d150cdc1b
//    @Enumerated(EnumType.STRING)
//    private EventEnum status;
>>>>>>> f40c2840be059361590df45d3f5f8a311a54a1cc

}
