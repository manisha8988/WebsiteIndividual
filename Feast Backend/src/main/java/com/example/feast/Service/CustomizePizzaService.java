package com.example.feast.Service;

import com.example.feast.Entity.CustomizePizzaEntity;
import com.example.feast.Repo.CustomizePizzaRepo;
import org.springframework.stereotype.Service;

@Service
public class CustomizePizzaService {

    private final CustomizePizzaRepo customizePizzaRepo;

    public CustomizePizzaService(CustomizePizzaRepo customizePizzaRepo) {
        this.customizePizzaRepo = customizePizzaRepo;
    }

    public CustomizePizzaEntity findById(Long id) {
        return customizePizzaRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("CustomizePizzaEntity not found"));
    }

    public double calculateTotalPrice(Long customizePizzaId, boolean addExtraCheese, boolean addExtraMeat,
                                      boolean addExtraMozzarella, boolean addExtraBasil, boolean addExtraVeggies) {

        CustomizePizzaEntity customizePizzaEntity = findById(customizePizzaId);
        return customizePizzaEntity.calculateTotalPrice(addExtraCheese, addExtraMeat,
                addExtraMozzarella, addExtraBasil, addExtraVeggies);
    }
}
