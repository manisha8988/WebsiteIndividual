package com.example.feast.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@Entity
@Table(name="items")
@NoArgsConstructor
public class Items {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Integer id;

    @Column(name="item_name",nullable = false)
    private String itemName;

    @Column(name = "item_category")
    private String itemCategory;

    @Column(name = "item_image",nullable = false)
    private String itemImage;

    @Column(name = "item_price",nullable = false)
    private Integer itemPrice;

    @Column(name = "item_status",nullable = false)
    private Boolean itemStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="category_id", referencedColumnName = "id")
    private Category categories;
}
