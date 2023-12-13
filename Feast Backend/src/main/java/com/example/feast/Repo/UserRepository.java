package com.example.feast.Repository;

import com.example.feast.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository <User,Long>{

    Optional<User> findByUsername(String username);
}
