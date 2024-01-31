package com.example.feast.Pojo;

import com.example.feast.Entity.User;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

import java.util.Date;

@Getter
@Setter
public class PaymentPojo {
    private Long id;

//    @NotNull
//    private Long orderId;

    private Long userId;

    @NotNull
    private Integer subTotal;

    private Integer deliveryFee;

    @NotNull
    private Integer total;

    private Date paymentDate;

    private String status;


}
