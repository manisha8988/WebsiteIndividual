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

    private Long id;

    private Long user;

    private Long item;

//    @OneToOne
//    @JoinColumn(name="item_unit_price")
//    private Items item;
//
    @NotNull
    private Integer total_pricee;

    @NotNull
    private Integer quantity;
}
