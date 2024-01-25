//package com.example.feast.Entity;
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.time.LocalDateTime;
//
//@Entity
//@Table(name="payment")
//@Data
//@Builder
//@AllArgsConstructor
//@NoArgsConstructor
//public class Payment {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name="Order_Id" , nullable=false) // Apply join table from order
//    private Long orderId;
//
//    @Column(name="Sub_Total" , nullable=false)  // Apply join table from cart
//    private Integer subTotal;
//
//    @Column(name="Delivery_Fee" , nullable=false) // Apply join table from cart
//    private Integer deliveryFee;
//
//    @Column(name="Total" , nullable=false)    // Apply join table from cart
//    private Integer Total;
//
//    @Column(name = "date")
//    private LocalDateTime paymentDate = LocalDateTime.now();
//
//
//}
//
