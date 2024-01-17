package com.example.feast.Service;

import com.example.feast.Entity.User;
import com.example.feast.Pojo.UserPojo;
import com.example.feast.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    User createUser(UserPojo userPojo);
    List<User> getAllData();
    Optional<User> getUserById(long id);
    void deleteUserById(long id);
    String loginUser(String email, String password);
}

