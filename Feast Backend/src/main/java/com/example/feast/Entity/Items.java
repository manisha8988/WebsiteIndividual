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
@Table(name="item")
@NoArgsConstructor
public class Items {
    @Id
    @SequenceGenerator(name = "item_seq_gen", sequenceName = "item_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "item_seq_gen", strategy = GenerationType.SEQUENCE)
    private  Integer id;

    @Column(name="item_name",nullable = false)
    private String itemName;

    @Column(name = "item_category")
    private String itemCategory;

    @Column(name = "item_image",nullable = false)
    private String itemImage;

    @Column(name = "item_price",nullable = false)
    private Integer itemPrice;

    @Column(name = "item_quantity",nullable = false)
    private Integer itemQuantity;

    @Column(name = "item_status",nullable = false)
    private Boolean itemStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="category_id", referencedColumnName = "id")
    private Category categories;
}
