package com.example.feast.Pojo;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class ItemPojo {
    private  Integer id;

    @NotEmpty
    private String itemName;

    @NotEmpty
    private String itemCategory;

    @NotEmpty
    private String itemImage;

    @NotNull
    private Integer itemPrice;

    @NotEmpty
    private String itemStatus;
}
