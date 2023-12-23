package com.example.feast.Service;

import com.example.feast.Entity.User;
import com.example.feast.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserService {
    private final UserRepo userRepository;
    @Autowired
    public UserService(UserRepo userRepository){
        this.userRepository=userRepository;
    }
    public User createUser(User user){
        return userRepository.save(user);
    }

    public User loginUser(String username, String password) {
        System.out.println("login ::" + username);
        Optional<User> optionalUser = userRepository.findByUsername(username);


        if (optionalUser.isPresent()) {
            User user=optionalUser.get();

            if (password.equals(user.getPassword())) {
                System.out.println("Login successful !!!::" + user.getUsername());
                return user;
            }
        }

        System.out.println("incorrect passsword or username");
        throw new IllegalArgumentException("Invalid password or username");
    }
}