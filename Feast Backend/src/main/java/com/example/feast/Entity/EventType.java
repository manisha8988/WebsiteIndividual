package com.example.feast.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
@Table(name="eventType")
public class EventType {

    @Id
    @SequenceGenerator(name = "item_seq_gen", sequenceName = "item_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "item_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name="birthday")
    private String birthday;

    @Column(name="anniversary")
    private String anniversary;

//    @Column(name=" affordable")
//    private String affordable;
//
//    @Column(name="economical")
//    private String economical;
//
//    @Column(name="premium")
//    private String premium;
}
