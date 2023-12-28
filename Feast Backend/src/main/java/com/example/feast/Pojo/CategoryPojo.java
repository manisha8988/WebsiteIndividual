package com.example.feast.Pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;


@Getter
@Setter

public class CategoryPojo {

    @NotNull
    private Integer id;

    @NotNull
    private String name;



}
