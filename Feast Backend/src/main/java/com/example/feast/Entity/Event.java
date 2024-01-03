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

    @Id
    @SequenceGenerator(name = "item_seq_gen", sequenceName = "item_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "item_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @OneToOne( fetch = FetchType.LAZY) // yha ma confuse xu birthday ra anniversary sngai rakhna pauxa ke nai
    @JoinColumn(name="event_type" ,  referencedColumnName = "birthday" , referencedColumnName = "anniversary")
    private Event eventType;

    @OneToOne( fetch = FetchType.LAZY)
    @JoinColumn(name="user_id" ,  referencedColumnName = "id")
    private User user;

    @Column(name="event_description")
    private String eventDescription;

    @Column(name="event_price", nullable=false)
    private Integer eventPrice;

    @Column(name="event_date_time", nullable=false)
    private Date eventDateTime;

//    private enum EventEnum;
    @Enumerated(EnumType.STRING)
    private EventEnum status;

}
