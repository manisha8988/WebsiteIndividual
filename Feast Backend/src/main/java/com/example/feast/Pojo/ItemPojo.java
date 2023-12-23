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
public class ItemPojo {
    private  Integer id;

    @NotEmpty
    private String itemName;

    @NotEmpty
    private String itemCategory;

    @NotEmpty
    private String itemImage;

    @NotNull
    private Integer itemUnitPrice;

    @NotEmpty
    private String itemStatus;
}
