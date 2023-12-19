package com.example.feast.Repo;

import com.example.feast.Entity.Category;
import com.example.feast.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
}
