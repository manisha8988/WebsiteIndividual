package com.example.feast.Service.Impl;

import com.example.feast.Entity.User;
import com.example.feast.Pojo.UserPojo;
import com.example.feast.Service.UserService;

import java.util.List;
import java.util.Optional;

public class UserServiceImpl implements UserService {
    @Override
    public String save(UserPojo UserPojo) {
        return null;
    }

    @Override
    public List<User> getAll() {
        return null;
    }

    @Override
    public Optional<User> getByEmail(String email) {
        return Optional.empty();
    }

    @Override
    public void deleteById(Long id) {

    }

    @Override
    public Optional<User> getById(Long id) {
        return Optional.empty();
    }

    @Override
    public String update(Long id, UserPojo UserPojo) {
        return null;
    }

    @Override
    public void createUser(User users) {
        return ;

    }
}
