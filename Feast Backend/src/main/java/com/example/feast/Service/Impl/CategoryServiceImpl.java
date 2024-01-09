package com.example.feast.Service.Impl;

import com.example.feast.Entity.Category;
import com.example.feast.Pojo.CategoryPojo;
import com.example.feast.Repo.CategoryRepo;
import com.example.feast.Service.CategoryService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepo categoryRepo;
    @Override
    public void saveCategory(CategoryPojo categoryPojo){
        Category category;

        if(categoryPojo.getId()!=null) {
            category = categoryRepo.findById(categoryPojo.getId())
            .orElseThrow(() -> new EntityNotFoundException("Category not found with ID: " + categoryPojo.getId()));
        }
        else{
            category = new Category();
        }

        category.setName(categoryPojo.getName());
        categoryRepo.save(category); // insert query
    }


    @Override
    public List<Category> findAll() {
        return categoryRepo.findAll();
    }

    @Override
    public void deleteById(Integer id) {
        categoryRepo.deleteById(id);
    }

    @Override
    public Optional<Category> findById(Integer id) {
        return categoryRepo.findById(id);
    }
}
