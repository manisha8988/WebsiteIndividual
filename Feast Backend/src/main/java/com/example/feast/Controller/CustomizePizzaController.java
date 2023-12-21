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
        // Calculate total price based on customization
        double totalPrice = customizePizzaService.calculateTotalPrice(
                customizePizzaEntity.isAddExtraCheese(),
                customizePizzaEntity.isAddExtraMeat(),
                customizePizzaEntity.isAddExtraMozzarella(),
                customizePizzaEntity.isAddExtraBasil(),
                customizePizzaEntity.isAddExtraVeggies(),
                customizePizzaEntity.getBasePrice()
        );

        // Update the base price in the entity
        customizePizzaEntity.setBasePrice(totalPrice);

        if (customizePizzaEntity.isAddExtraCheese()) {
            double addExtraCheese=60;
            System.out.println("Extra cheese has been added!" + addExtraCheese);
        }
        if (customizePizzaEntity.isAddExtraMeat()) {
            double addExtraMeat=200;
            System.out.println("Extra Meat has been added!" +addExtraMeat);
        }
        if (customizePizzaEntity.isAddExtraMozzarella()) {
            double addExtraMozzarella=35;
            System.out.println("Extra Mozzarella has been added!" +addExtraMozzarella);
        }
        if (customizePizzaEntity.isAddExtraBasil()) {
            double addExtraBasil=30;
            System.out.println("Extra Basil has been added!" +addExtraBasil);
        }
        if (customizePizzaEntity.isAddExtraVeggies()) {
            double addExtraVeggies=100;
            System.out.println("Extra Veggies has been added!" +addExtraVeggies);
        }

        // Save the entity
        CustomizePizzaEntity savedPizza = customizePizzaService.saveCustomizePizza(customizePizzaEntity);

        if (savedPizza != null) {
            return ResponseEntity.ok("CustomizePizzaEntity saved with updated base price: " + savedPizza.getBasePrice());
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save CustomizePizzaEntity");
        }

    }
    // Other controller methods as needed
}
