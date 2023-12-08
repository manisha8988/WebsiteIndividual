package com.example.feast.Entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="items")
@NoArgsConstructor
public class Items {
    @Id
    @SequenceGenerator(name = "items_seq_gen", sequenceName = "items_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "items_seq_gen", strategy = GenerationType.SEQUENCE)
    private  Integer id;

    @Column(name="item_name",nullable = false)
    private String itemName;

    @Column(name = "item_category",nullable = false)
    private String itemCategory;

    @Column(name = "item_image",nullable = false)
    private String itemImage;

    @Column(name = "item_price",nullable = false)
    private Integer itemPrice;

    @Column(name = "item_status",nullable = false)
    private String itemStatus;
}
