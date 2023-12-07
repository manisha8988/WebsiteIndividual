package com.example.feast1.Service;

import com.example.feast1.Entity.User;
import com.example.feast1.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository=userRepository;
    }
    public User createUser(User user){

        return userRepository.save(user);
    }
}
