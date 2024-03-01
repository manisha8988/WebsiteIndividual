package com.example.feast;

import com.example.feast.Entity.Category;
import com.example.feast.Repo.CategoryRepo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CategoryTest {
    @Autowired
    private CategoryRepo categoryRepository;

    @Test
    @Order(1)
    @Rollback(value = false)
    public void save(){
        Category category= new Category();
        category.setName("American Candle");

        category = categoryRepository.save(category);
        Assertions.assertThat(category.getId()).isGreaterThan(0);
    }

    @Test
    @Order(2)
    public void findById(){
        Category category= categoryRepository.findById(1).get();
        Assertions.assertThat(category.getId()).isEqualTo(1);
    }

    @Test
    @Order(3)
    public void findAll(){
        List<Category> Category = categoryRepository.findAll();
        Assertions.assertThat(Category.size()).isGreaterThan(0);

    }

    @Test
    @Order(4)
    @Rollback(value = false)
    public void updateCategory(){
        Category category = categoryRepository.findById(1).get();
        category.setName("Nepali Candle");
        Category categoryUpdated =  categoryRepository.save(category);

        Assertions.assertThat(categoryUpdated.getName()).isEqualTo("Nepali Candle");

    }

    @Test
    @Order(5)
    @Rollback(value = false)
    public void deleteById(){
        Category category = categoryRepository.findById(1).get();
        categoryRepository.delete(category);
        Category category1 =null;
        Optional<Category> optionalCategory = categoryRepository.findById(1);
        if(optionalCategory.isPresent()){
            category1 = optionalCategory.get();
        }
        Assertions.assertThat(category1).isNull();
    }

}

