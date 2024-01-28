package com.example.feast.Pojo;

import lombok.Getter;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

import java.util.Date;


@Getter
@Setter

public class ReservationPojo {

    private Integer id;

    @NotNull
    private String name;

    @NotNull
    private String phone;

    @NotNull
    private Integer persons;

    @NotNull
    private Date date;

    private  Integer tableId;


}
