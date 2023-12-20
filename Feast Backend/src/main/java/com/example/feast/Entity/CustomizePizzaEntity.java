package com.example.feast.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CustomizePizzaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double basePrice = 800; // Updated base price to 800 Rs

    // Getters, Setters, Constructors

    // Method to calculate total price with customizations
    public double calculateTotalPrice(boolean addExtraCheese, boolean addExtraMeat, boolean addExtraMozzarella,
                                      boolean addExtraBasil, boolean addExtraVeggies) {
        double totalPrice = this.basePrice;

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
    // Other entity properties, getters, setters, constructors as needed
}
