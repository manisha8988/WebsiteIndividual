package com.example.feast.Pojo;

import lombok.Getter;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

import java.util.Date;

@Getter
@Setter
public class PaymentPojo {
    private Long id;

    @NotNull
    private Long orderId;

    @NotNull
    private Integer subTotal;

    private Integer deliveryFee;

    @NotNull
    private Integer total;

    private Date paymentDate;

}
