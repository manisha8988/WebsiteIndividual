package com.example.feast.Service;

import com.example.feast.Entity.User;
import com.example.feast.Pojo.UserPojo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {

    String save(UserPojo UserPojo);

    List<User> getAll();

    Optional<User> getByEmail(String email);

    void deleteById(Long id);

    Optional<User> getById(Long id);

    String update(Long id, UserPojo UserPojo);


    // Other custom service methods, if any
}

