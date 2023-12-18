package com.example.feast.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="categories")
@Getter
@Setter

public class Category {
    @SequenceGenerator(name = "categories_seq_gen", sequenceName = "categories_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "categories_seq_gen", strategy = GenerationType.SEQUENCE)
    @Id
    private Integer id;

    @Column(name="name" , nullable=false)
    private String name;

    @Column(name="code", nullable = false)
    private String code;

}
