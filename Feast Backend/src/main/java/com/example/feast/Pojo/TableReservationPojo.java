package com.example.feast.Pojo;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TableReservationPojo {
    private  Integer id;

    @NotEmpty
    private String customer_Name;

    @NotEmpty
    private String phone;

    @NotNull
    private Integer number_person;

    @NotEmpty
    private String day;


}
