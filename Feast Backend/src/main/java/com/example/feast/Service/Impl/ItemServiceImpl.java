package com.example.feast.Service.Impl;

import com.example.feast.Entity.Items;
import com.example.feast.Pojo.ItemPojo;
import com.example.feast.Repo.ItemRepo;
import com.example.feast.Service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {
    private final ItemRepo itemRepo;
    @Override
    public void saveItem(ItemPojo itemPojo) {
        Items item= new Items();
        if(itemPojo.getId()!=null){
            item=itemRepo.findById(itemPojo.getId()).get();
        }

        item.setItemName(itemPojo.getItemName());
        item.setItemCategory(itemPojo.getItemCategory());
        item.setItemImage(itemPojo.getItemImage());
        item.setItemPrice(itemPojo.getItemPrice());
        item.setItemStatus(Boolean.valueOf(itemPojo.getItemStatus()));

        itemRepo.save(item);

    }

    @Override
    public List<Items> findAll() {
        return itemRepo.findAll();
    }

    @Override
    public Optional<Items> findById(Integer id) {
        return itemRepo.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
        itemRepo.deleteById(id);
    }
}
