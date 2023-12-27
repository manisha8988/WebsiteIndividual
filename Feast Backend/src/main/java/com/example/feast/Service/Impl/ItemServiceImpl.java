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
public abstract class ItemServiceImpl implements ItemService {
    private final ItemRepo itemRepo;


    @Override
    public void saveItem(ItemPojo itemPojo) {
//        Item item;
        Items item = new Items();
        if (itemPojo.getId() != null) {
            item = itemRepo.findById(itemPojo.getId()).orElseThrow(() -> new EntityNotFoundException("SystemUser not found with ID: " + itemPojo.getId()));
        } else {
            item = new Items();
            item.setItemName(itemPojo.getItemName());
            item.setItemCategory(itemPojo.getItemCategory());
            item.setItemImage(itemPojo.getItemImage());
            item.setItemUnitPrice(itemPojo.getItemUnitPrice());
            item.setItemStatus(Boolean.valueOf((itemPojo.getItemStatus())));
            itemRepo.save(item);
            System.out.println("Saved Successfully");
        }



        item.setItemName(itemPojo.getItemName());
        item.setItemCategory(itemPojo.getItemCategory());
        item.setItemImage(itemPojo.getItemImage());

        item.setItemUnitPrice(itemPojo.getItemUnitPrice());
        item.setItemUnitPrice(itemPojo.getItemUnitPrice());
        item.setItemStatus(Boolean.valueOf(itemPojo.getItemStatus()));

        itemRepo.save(item);

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
        item.setItemUnitPrice(itempojo.getItemUnitPrice());
        return "Update successfully";
    }

}
