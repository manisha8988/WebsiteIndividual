package com.example.feast.Controller;


import com.example.feast.Entity.Cart;
import com.example.feast.Pojo.CartPojo;
import com.example.feast.Service.CartService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cart")
public class CartController {
    private final CartService cartService;

    @PostMapping(value="/save")
    public String saveCart(@Valid @RequestBody CartPojo cartPojo){
        cartService.saveCart(cartPojo);
        return "Saved";
    }

    @GetMapping("/getAll")
    public List<Cart> getAll(){
        return cartService.getAll();
    }

    @DeleteMapping("/deleteById")
    public void deleteById(@PathVariable("id") Long id){
      cartService.deleteById(id);
    }
}
