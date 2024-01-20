package com.example.feast.Pojo;

import com.example.feast.Entity.Item;
import com.example.feast.Entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter


public class CartPojo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @OneToOne
    @JoinColumn(name="item_id")
    private Item item;

//    @OneToOne
//    @JoinColumn(name="item_unit_price")
//    private Items item;
//
    @NotNull
    private Integer total_pricee;

    @NotNull
    private Integer quantity;
}
