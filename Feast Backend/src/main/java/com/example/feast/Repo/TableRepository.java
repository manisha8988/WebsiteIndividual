package com.example.feast.Repo;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Table;

public interface TableRepository extends JpaRepository<Table, Long> {
    Table findByNumber(int number);
}

