package com.example.feast.Service;

import com.example.feast.Entity.User;
import com.example.feast.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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


    public User loginUser(String email, String password) {
        System.out.println("login ::" + email);
        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isPresent()) {
            User user=optionalUser.get();

            if (password.equals(user.getPassword())) {
                System.out.println("Login successful !!!::" + user.getEmail());
                return user;
            }
        }

        System.out.println("incorrect passsword or email");
        throw new IllegalArgumentException("Invalid password or email");
    }

    public List<User> getAllData() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(long id) {
        return userRepository.findById(id);
    }

    public void deleteUserById(long id) {
        userRepository.deleteById(id);
    }


}