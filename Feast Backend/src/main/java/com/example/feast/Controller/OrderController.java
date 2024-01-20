package com.example.feast.Controller;


import com.example.feast.Entity.Order;
import com.example.feast.Pojo.OrderPojo;
import com.example.feast.Service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

//    @Autowired // Add this annotation to properly inject the OrderService bean
//    public OrderController(OrderService orderService) {
//        this.orderService = orderService;
//    }


    @PostMapping(value = "/save")
    public String saveOrder(@Valid @RequestBody OrderPojo orderpojo) {
        orderService.save(orderpojo);
        return "Saved Successfully!";
    }

    @GetMapping("/getAll")
    public List<Order> getALl() {
        return orderService.getALl();
    }

    @GetMapping("/getById/{id}")
    public Optional<Order> getById(@PathVariable("id") Long id) {
        return this.orderService.getById(id);
    }

}
