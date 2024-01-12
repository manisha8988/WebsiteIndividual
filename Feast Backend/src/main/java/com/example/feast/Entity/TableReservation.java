package com.example.feast.Entity;

import jakarta.persistence.*;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;

@Builder
@Entity
@Table(name="reservedTable")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class TableReservation {

    @Id
    @SequenceGenerator(name = "ReservedTable_seq_gen", sequenceName = "ReservedTable _id_seq", allocationSize = 1)
    @GeneratedValue(generator = "ReservedTable_seq_gen", strategy = GenerationType.SEQUENCE)
    private  Integer id;

    @Column(name="name",nullable = false)
    private String customer_Name;

    @Column(name="phone",nullable = false)
    private String phone;

    @Column(name="number_person",nullable = false)
    private int number_person;

    @Column(name="day",nullable = false)
    private String day;


}
