package com.example.feast.Repo;

import com.example.feast.Entity.EventType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventTypeRepo extends JpaRepository<EventType , Long> {
}
