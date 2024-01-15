package com.example.feast.Repo;

import com.example.feast.Entity.BookTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookTableRepository extends JpaRepository<BookTable, Long> {
    BookTable findByNumber(int number);
}

