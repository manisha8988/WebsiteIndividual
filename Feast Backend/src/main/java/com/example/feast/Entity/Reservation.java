package com.example.feast.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="reserve")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(name="name" , nullable=false)
    private String name;

    @Column(name="phone" , nullable=false)
    private String phone;

    @Column(name="persons" , nullable=false)
    private Integer persons;

    @Column(name="date" , nullable=false)
    private String date;

}
