package com.example.feast.Service;

import com.example.feast.Pojo.BookTablePojo;

public class BookTableService {
    public BookTablePojo getBookTableById(int tableId) {
        // Logic to fetch data from the database
        // Convert the data to a BookTablePojo object
        return new BookTablePojo(/* data from the database */);
    }

    // Other methods...
}

