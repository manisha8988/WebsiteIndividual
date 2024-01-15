package com.example.feast.Pojo;

import com.example.feast.Entity.Category;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
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

    @OneToOne
    @JoinColumn(name="category_id")
//    private Category categories;
    private Integer categoriesId;

    @NotEmpty
    private String itemImage;

    @NotNull
    private Integer itemPrice;

    @NotEmpty
    private Boolean itemStatus;

}
