package com.example.feast.Service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.feast.Entity.Items;
import com.example.feast.Pojo.ItemPojo;
import com.example.feast.Repo.ItemRepo;
import com.example.feast.Service.ItemService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    private final ItemRepo itemRepo;

    @Override
    public void saveItem(ItemPojo itemPojo) {
//        Items item;
        Items item;
        if (itemPojo.getId() != null) {
            item = itemRepo.findById(itemPojo.getId()).orElseThrow(() -> new EntityNotFoundException("SystemUser not found with ID: " + itemPojo.getId()));
        } else {
            item = new Items();
        }
            item.setItemName(itemPojo.getItemName());
            item.setItemImage(itemPojo.getItemImage());
            item.setItemPrice(itemPojo.getItemPrice());
//            item.setItemQuantity(itemPojo.getItemQuantity());
            item.setItemStatus(itemPojo.getItemStatus());
            item.setCategories(itemPojo.getCategories());

            itemRepo.save(item);
            System.out.println("Saved Successfully");

    }

    @Override
    public List<Items> findAll() {
        return null;
    }

    @Override
    public Optional<Items> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void deleteById(Integer id) {
        itemRepo.deleteById(id);
    }

    @Override
    public String update(Integer id, ItemPojo itempojo){
        Items item = itemRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("user not found with ID : "+ id));
        item.setItemPrice(itempojo.getItemPrice());
        return "Update successfully";
    }

}
