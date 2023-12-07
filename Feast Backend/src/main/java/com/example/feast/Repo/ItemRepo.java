package com.example.feast.Repo;


import com.example.feast.Entity.Items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepo extends JpaRepository<Items,Integer> {


}
