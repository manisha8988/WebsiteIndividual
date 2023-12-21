package com.example.feast.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;


@Entity
@Table(name="orders")
@Getter
@Setter
public class Order {
    @Id
    @SequenceGenerator(name = "orders_seq_gen", sequenceName = "orders_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "orders_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="item_id")
    private Items item;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate = new Date(System.currentTimeMillis());

    @Column(name="quantity", nullable=false)
    private Integer quantity;
}

