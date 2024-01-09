package com.example.feast.Controller;

import com.example.feast.Entity.User;
import com.example.feast.Service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("register")

public class UserController {
    public final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<Object> createUsers(@RequestBody User users) {
        try {
            userService.createUser(users);
            return new ResponseEntity<>(users, HttpStatus.CREATED);

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }


    }

    @GetMapping("/login")
    public ResponseEntity<Object> loginUsers(@RequestBody User loginUsers){
        try{
            System.out.println(loginUsers.getUsername());
            System.out.println(loginUsers.getPassword());
            return new ResponseEntity<>(loginUsers, HttpStatus.CONFLICT);

        }catch (Exception e){
            System.out.println("dont match");

            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        }

    }

}