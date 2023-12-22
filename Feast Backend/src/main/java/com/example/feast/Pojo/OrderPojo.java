package com.example.feast.Pojo;

import com.example.feast.Entity.Items;
import com.example.feast.Entity.User;
import jakarta.persistence.*;

import java.util.Date;

public class OrderPojo {
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="item_id")
    private Items item;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;

    @Column(name="quantity", nullable=false)
    private Integer quantity;

}
