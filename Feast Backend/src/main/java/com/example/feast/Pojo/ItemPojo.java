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
    private Integer itemPrice;

    @NotEmpty
    private String itemStatus;

<<<<<<< HEAD
    @NotEmpty
=======
    @NotNull
>>>>>>> 6320447f635d56de4ed4e70b4b3d313d150cdc1b
    private Integer itemQuantity;
}
