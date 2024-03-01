//package com.example.feast;
//import com.example.feast.Entity.Cart;
//import com.example.feast.Entity.Item;
//import com.example.feast.Entity.User;
//import com.example.feast.Pojo.CartPojo;
//import com.example.feast.Repo.CartRepo;
//import com.example.feast.Repo.ItemRepo;
//import com.example.feast.Repo.UserRepo;
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
//public class CartTest {
//
//    @Autowired
//    private CartRepo cartRepository;
//    @Autowired
//    private UserRepo userRepo;
//    @Autowired
//    private ItemRepo itemRepo;
//
//
//    @Test
//    @Order(1)
//    @Rollback(value = false)
//    public void save(CartPojo cartPojo){
//        Cart cart = new Cart();
//        User user = userRepo.findById(cartPojo.getUserId()).get();
//        cart.setUser(user);
//        Item item = itemRepo.findById(cartPojo.getItemId()).get();
//        cart.setItem(item);
//        cart.setTotal_price(100);
//        cart.setQuantity(2);
//    }
//
//    @Test
//    @Order(2)
//    public void getAll(){
//        List<Cart> Cart = cartRepository.findAll();
//        Assertions.assertThat(Cart.size()).isGreaterThan(0);
//    }
//
//    @Test
//    @Order(3)
//    @Rollback(value = false)
//    public void updateCart(){
//        Cart cart = cartRepository.findById(1L).get();
//        cart.setQuantity(6);
//        Cart cartUpdated =  cartRepository.save(cart);
//
//        Assertions.assertThat(cartUpdated.getId()).isEqualTo(6);
//    }
//
//    @Test
//    @Order(4)
//    @Rollback(value = false)
//    public void deleteById(){
//        Cart cart= cartRepository.findById(1L).get();
//        cartRepository.deleteById(cart.getId());
//        Cart cart1 =null;
//        Optional<Cart> optionalCart = cartRepository.findById(1L);
//        if(optionalCart.isPresent()){
//            cart1 = optionalCart.get();
//        }
//        Assertions.assertThat(cart1).isNull();
//    }
//}
