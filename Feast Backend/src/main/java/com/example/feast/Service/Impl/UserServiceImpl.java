package com.example.feast.Service.Impl;

import com.example.feast.Entity.User;
import com.example.feast.Repo.UserRepo;
import com.example.feast.Pojo.UserPojo;
import com.example.feast.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepo userRepository;

    @Override
    public User createUser(UserPojo userPojo) {
        User user = new User();
        user.setEmail(userPojo.getEmail());
        user.setPassword(userPojo.getPassword());
        user.setConfirmPassword(userPojo.getConfirmPassword());
        user.setFullName(userPojo.getFullName());
        user.setSecurityQuestion(userPojo.getSecurityQuestion());

        return userRepository.save(user);
    }

    @Override
    public List<User> getAllData() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(long id) {
        return userRepository.findById(id);
    }

    @Override
    public void deleteUserById(long id) {
        userRepository.deleteById(id);
    }

    @Override
    public String loginUser(String email, String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();

            if (password.equals(user.getPassword())) {
                return "Login successful";
            }
        }

        throw new IllegalArgumentException("Invalid password or email");
    }
}
