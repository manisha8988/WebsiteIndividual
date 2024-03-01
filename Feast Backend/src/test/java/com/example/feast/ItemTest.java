//package com.example.feast;
//
//import com.example.feast.Entity.Category;
//import com.example.feast.Entity.Item;
//import com.example.feast.Pojo.ItemPojo;
//import com.example.feast.Repo.CategoryRepo;
//import com.example.feast.Repo.ItemRepo;
//import org.assertj.core.api.Assertions;
//import org.junit.jupiter.api.MethodOrderer;
//import org.junit.jupiter.api.Order;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.TestMethodOrder;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.test.annotation.Rollback;
//
//import java.util.List;
//import java.util.Optional;
//
//@DataJpaTest
//@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
//public class ItemTest {
//    @Autowired
//    private ItemRepo itemRepo;
//    @Autowired
//    private CategoryRepo categoryRepo;
//
//    @Test
//    @Order(1)
//    @Rollback(value = false)
//    public void save(ItemPojo itemPojo){
//        Item item= new Item();
//        item.setItemName("American Candle");
//        item.setItemPrice(500);
//        item.setItemImage("test.jpg");
//        Category category= categoryRepo.findById(itemPojo.getCategoryId()).get();
//
//        item.setCategory(category);
//        itemRepo.save(item);
//        Assertions.assertThat(item.getId()).isGreaterThan(0);
//    }
//
//    @Test
//    @Order(2)
//    public void getById(){
//        Item item= itemRepo.findById(1).get();
//        Assertions.assertThat(item.getId()).isEqualTo(1);
//    }
//
//    @Test
//    @Order(3)
//    public void getAll(){
//        List<Item> Item = itemRepo.findAll();
//        Assertions.assertThat(Item.size()).isGreaterThan(0);
//
//    }
//
//    @Test
//    @Order(4)
//    @Rollback(value = false)
//    public void updateCategory(){
//        Item product = itemRepo.findById(1).get();
//        product.setItemName("Nepali Candle");
//        Item productUpdated = itemRepo.save(product);
//
//        Assertions.assertThat(productUpdated.getItemName()).isEqualTo("Nepali Candle");
//    }
//
//    @Test
//    @Order(5)
//    @Rollback(value = false)
//    public void deleteById(){
//        Item product = itemRepo.findById(1).get();
//        itemRepo.deleteById(product.getId());
//        Item product1 =null;
//        Optional<Item> optionalProduct = itemRepo.findById(1);
//        if(optionalProduct.isPresent()){
//            product1 = optionalProduct.get();
//        }
//        Assertions.assertThat(product1).isNull();
//    }
//}
