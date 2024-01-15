package com.example.feast.Controller;

import com.example.feast.Entity.Items;
import com.example.feast.Pojo.ItemPojo;
import com.example.feast.Service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/item")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;


    @PostMapping("/save")
    public String saveItem(@RequestBody ItemPojo itemPojo) {
        System.out.println(itemPojo);
        itemService.saveItem(itemPojo);
        return "Item successfully created";
    }
    @GetMapping("/get-by-id/{id}")
    public Optional<Items> findById(@PathVariable("id") Integer id) {
        return itemService.findById(id);
    }

    @DeleteMapping("/delete-by-id/{id}")
    public void deleteItemById(@PathVariable("id") Integer id) {
        itemService.deleteById(id);
    }


    @PutMapping("/update/{id}")
    public  String update(@PathVariable("id") Integer id){
        return this.itemService.update(id, new ItemPojo());
    }
}
