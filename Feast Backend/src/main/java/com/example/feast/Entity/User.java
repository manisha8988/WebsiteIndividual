package com.example.feast.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table (name="users")
@Getter
@Setter

public class User {

    @Id
    @GeneratedValue(generator = "users_seq_gen", strategy = GenerationType.SEQUENCE)
    private long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String phone_number;

//
//    , uniqueConstraints = {
//        @UniqueConstraint(name = "UNIQUE_user_email", columnNames = "email")
//    }
}
