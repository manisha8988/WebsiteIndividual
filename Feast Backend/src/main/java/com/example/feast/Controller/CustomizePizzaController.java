package com.example.feast.Controller;

import com.example.feast.Service.CustomizePizzaService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customize-pizza")
public class CustomizePizzaController {

    private final CustomizePizzaService customizePizzaService;

    public CustomizePizzaController(CustomizePizzaService customizePizzaService) {
        this.customizePizzaService = customizePizzaService;
    }

    @PostMapping("/{customizePizzaId}/calculate-price")
    public double calculateCustomizePizzaPrice(
            @PathVariable Long customizePizzaId,
            @RequestParam(required = false, defaultValue = "false") boolean addExtraCheese,
            @RequestParam(required = false, defaultValue = "false") boolean addExtraMeat,
            @RequestParam(required = false, defaultValue = "false") boolean addExtraMozzarella,
            @RequestParam(required = false, defaultValue = "false") boolean addExtraBasil,
            @RequestParam(required = false, defaultValue = "false") boolean addExtraVeggies
    ) {
        return customizePizzaService.calculateTotalPrice(customizePizzaId, addExtraCheese, addExtraMeat,
                addExtraMozzarella, addExtraBasil, addExtraVeggies);
    }
}
