package com.example.feast.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="carts")
@Getter
@Setter
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    @OneToOne
    @JoinColumn(name="item_id")
    private Item item;


    @Column(name="Total_price")
    private Integer total_pricee;

    @Column(name="Quantity")
    private Integer quantity;



}
