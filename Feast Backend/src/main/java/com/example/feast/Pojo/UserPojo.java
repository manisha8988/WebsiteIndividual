package com.example.feast.Pojo;

import jakarta.persistence.Column;

public class UserPojo {

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

}
