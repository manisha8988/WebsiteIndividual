package com.example.feast.Service;

import com.example.feast.Entity.CustomizePizzaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomizePizzaRepo extends JpaRepository<CustomizePizzaEntity, Long> {

}
