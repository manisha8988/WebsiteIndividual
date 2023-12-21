package com.example.feast.Controller;

import com.example.feast.Entity.Category;
import com.example.feast.Pojo.CategoryPojo;
import com.example.feast.Service.CategoryService;
import com.example.feast.Service.Impl.CategoryServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("category")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;
//    private final CategoryServiceImpl categoryService;

    @PostMapping("save")
    public String saveUser(@Valid @RequestBody CategoryPojo categoryPojo){
        categoryService.saveCategory(categoryPojo);
        return "in this section";
    }

    @GetMapping("/findAll")
    public List<Category> getAll(){
        return this.categoryService.findAll();
    }

    @GetMapping("/findById/{id}")
    public Optional<Category> getById(@PathVariable("id") Integer id){
        return this.categoryService.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Integer id){
        this.categoryService.deleteById(id);
    }

}
