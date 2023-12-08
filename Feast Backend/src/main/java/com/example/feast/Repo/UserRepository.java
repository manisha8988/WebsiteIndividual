package com.example.feast1.Repository;

import com.example.feast1.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Long>{
}
