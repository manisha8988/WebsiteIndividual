package com.example.feast.Controller;


import com.example.feast.Entity.Order;
import com.example.feast.Pojo.OrderPojo;
import com.example.feast.Service.Impl.CategoryServiceImpl;
import com.example.feast.Service.Impl.OrderServiceImpl;
import com.example.feast.Service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
//@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @Autowired // Add this annotation to properly inject the OrderService bean
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    @PostMapping(value = "/save")
    public String saveOrder(@Valid @RequestBody OrderPojo orderpojo) {
        orderService.save(orderpojo);
        return "Saved Successfully!";
    }

    @GetMapping("/getAll")
    public List<Order> getALl() {
        return orderService.getALl();
    }
}

