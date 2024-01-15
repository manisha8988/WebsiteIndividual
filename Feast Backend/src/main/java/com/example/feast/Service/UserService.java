package com.example.feast.Service;

import com.example.feast.Entity.User;
import com.example.feast.Pojo.UserPojo;

import java.util.Optional;

<<<<<<< HEAD

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
=======
public interface UserService {
    User createUser(UserPojo userPojo);
    List<User> getAllData();
    Optional<User> getUserById(long id);
    void deleteUserById(long id);
    String loginUser(String email, String password);
}
>>>>>>> 11bfc64d8c646bcc5c1a90cd88702b86a354e570
