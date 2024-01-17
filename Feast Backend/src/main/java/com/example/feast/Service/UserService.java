package com.example.feast.Service;

import com.example.feast.Entity.User;
import com.example.feast.Pojo.UserPojo;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User createUser(UserPojo userPojo);
    List<User> getAllData();
    Optional<User> getUserById(long id);
    void deleteUserById(long id);
    String loginUser(String email, String password);
}
