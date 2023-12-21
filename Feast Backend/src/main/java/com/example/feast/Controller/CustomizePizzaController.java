package com.example.feast.Controller;

import com.example.feast.Entity.CustomizePizzaEntity;
import com.example.feast.Service.CustomizePizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pizzas")
public class CustomizePizzaController {

    private final CustomizePizzaService customizePizzaService;

    @Autowired
    public CustomizePizzaController(CustomizePizzaService customizePizzaService) {
        this.customizePizzaService = customizePizzaService;
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveCustomizePizza(@RequestBody CustomizePizzaEntity customizePizzaEntity) {
        double totalPrice = customizePizzaService.calculateTotalPrice(
                customizePizzaEntity.isAddExtraCheese(),
                customizePizzaEntity.isAddExtraMeat(),
                customizePizzaEntity.isAddExtraMozzarella(),
                customizePizzaEntity.isAddExtraBasil(),
                customizePizzaEntity.isAddExtraVeggies(),
                customizePizzaEntity.getBasePrice()
        );

        customizePizzaEntity.setBasePrice(totalPrice);

        CustomizePizzaEntity savedPizza = customizePizzaService.saveCustomizePizza(customizePizzaEntity);
        if (savedPizza != null) {
            return ResponseEntity.ok("CustomizePizzaEntity saved with updated base price: " + savedPizza.getBasePrice());
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save CustomizePizzaEntity");
        }
    }

    // Other controller methods as needed
}
