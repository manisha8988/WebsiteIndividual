package com.example.feast.Controller;


import com.example.feast.Entity.Cart;
import com.example.feast.Pojo.CartPojo;
import com.example.feast.Service.CartService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
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

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Long id){
      cartService.deleteById(id);
    }

    @PutMapping("/updateQuantity/{id}")
    public ResponseEntity<String> updateQuantity(
            @PathVariable("id") Long id,
            @RequestParam("quantity") int quantity
    ) {
        try {
            cartService.updateQuantity(id, quantity);
            return ResponseEntity.ok("Quantity updated successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to update quantity");
        }
    }
}
