//package com.example.feast;
//
//import com.example.feast.Entity.User;
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
//public class UserTest {
//
//    @Autowired
//    private UserRepo userRepository;
//
//    @Test
//    @Order(1)
//    @Rollback(value = false)
//    public void saveUserTest() {
//        User user= new User();
//        user.setEmail("manisha@gmail.com");
//        user.setFullName("Manisha");
//        user.setPassword("mansiha123");
//        user.setConfirmPassword("manisha123");
//        user.setEmail("manisha@gmail.com");
//        user.setSecurityQuestion("Gillette");
//
//        userRepository.save(user);
//
//        Assertions.assertThat(user.getId()).isGreaterThan(0);
//    }
//
//    @Test
//    @Order(2)
//    public  void getById(){
//        User userGet= userRepository.findById(1L).get();
//        Assertions.assertThat(userGet.getId()).isEqualTo(1L);
//    }
//
//    @Test
//    @Order(3)
//    public void getAll(){
//        List<User> users = userRepository.findAll();
//        Assertions.assertThat(users.size()).isGreaterThan(0);
//    }
//
//    @Test
//    @Order(4)
//    @Rollback(value = false)
//    public void updateUser(){
//        User user = userRepository.findById(1L).get();
//        user.setFullName("Samira shrestha");
//        User userUpdated =  userRepository.save(user);
//
//        Assertions.assertThat(userUpdated.getFullName()).isEqualTo("sajak shrestha");
//    }
//
//    @Test
//    @Order(5)
//    @Rollback(value = false)
//    public void deleteById(){
//        User user = userRepository.findById(1l).get();
//        userRepository.deleteById(1L);
//        User user1 = null;
//        Optional<User> opUser = userRepository.findById(1L);
//        if(opUser.isPresent()){
//            user1 = opUser.get();
//        }
//        Assertions.assertThat(user1).isNull();
//    }
//
//
//}
