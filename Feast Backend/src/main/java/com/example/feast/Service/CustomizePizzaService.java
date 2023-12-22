package com.example.feast.Service;

import com.example.feast.Entity.CustomizePizzaEntity;
import com.example.feast.Repo.CustomizePizzaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomizePizzaService {

    private final CustomizePizzaRepository customizePizzaRepository;

    @Autowired
    public CustomizePizzaService(CustomizePizzaRepository customizePizzaRepository) {
        this.customizePizzaRepository = customizePizzaRepository;
    }

    public CustomizePizzaEntity saveCustomizePizza(CustomizePizzaEntity customizePizzaEntity) {
        // Perform any additional operations if needed
        return customizePizzaRepository.save(customizePizzaEntity);
    }

    public double calculateTotalPrice(boolean addExtraCheese, boolean addExtraMeat, boolean addExtraMozzarella,
                                      boolean addExtraBasil, boolean addExtraVeggies, double basePrice) {
        double totalPrice = basePrice;

        if (addExtraCheese) {
            totalPrice += 60; // Add extra cheese price: 60 Rs
        }
        if (addExtraMeat) {
            totalPrice += 200; // Add extra meat price: 200 Rs
        }
        if (addExtraMozzarella) {
            totalPrice += 35; // Add extra mozzarella price: 35 Rs
        }
        if (addExtraBasil) {
            totalPrice += 30; // Add extra basil price: 30 Rs
        }
        if (addExtraVeggies) {
            totalPrice += 100; // Add extra veggies price: 100 Rs
        }

        return totalPrice;
    }
}
