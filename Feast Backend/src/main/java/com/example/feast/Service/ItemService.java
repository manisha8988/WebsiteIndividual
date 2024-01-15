package com.example.feast.Service;

import com.example.feast.Entity.Items;
import com.example.feast.Pojo.ItemPojo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface ItemService {
    void saveItem(ItemPojo itemPojo);

    List<Items> findAll();


    Optional<Items> findById(Integer id);

    void deleteById(Integer id);

    String update(Integer id, ItemPojo itempojo);
}