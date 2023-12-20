package com.example.feast.Service;

import com.example.feast.Entity.Category;
import com.example.feast.Pojo.CategoryPojo;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    void saveCategory(CategoryPojo categoryPojo);


    List<Category> findAll();

    Optional<Category> findById(Integer id);

    void deleteById(Integer id);

}

