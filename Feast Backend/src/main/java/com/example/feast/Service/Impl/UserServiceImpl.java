package com.example.feast.Service.Impl;

import com.example.feast.Entity.User;
import com.example.feast.Pojo.UserPojo;
import com.example.feast.Repo.UserRepo;
import com.example.feast.Service.UserService;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepo userRepo;
    @Override
    public String save(UserPojo UserPojo) {
        return null;
    }

    @Override
    public List<User> getAll() {
        return userRepo.findAll();
    }

    @Override
    public Optional<User> getByEmail(String email) {
        return Optional.empty();
    }

    @Override
    public void deleteById(Long id){
        userRepo.deleteById(id);
    }

    @Override
    public Optional<User> getById(Long id) {
        return Optional.empty();
    }

    @Override
    public String update(Long id, UserPojo UserPojo) {
        return null;
    }



    }
