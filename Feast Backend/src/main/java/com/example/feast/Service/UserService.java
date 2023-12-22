package com.example.feast.Service;

import com.example.feast.Entity.User;
import com.example.feast.Pojo.UserPojo;

import java.util.List;
import java.util.Optional;

public interface UserService {

    String save(UserPojo UserPojo);

    List<User> getAll();

    Optional<User> getByEmail(String email);

    void deleteById(Long id);

    Optional<User> getById(Long id);
    
    // Other custom service methods, if any
}

