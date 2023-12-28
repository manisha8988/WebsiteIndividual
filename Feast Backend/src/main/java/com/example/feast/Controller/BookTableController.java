package com.example.feast.Controller;

import com.example.feast.Entity.BookTable;
import com.example.feast.Repo.BookTableRepository;
import com.example.feast.exception.TableAlreadyReservedException;
import com.example.feast.exception.TableNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/book-tables")
public class BookTableController {

    private final BookTableRepository bookTableRepository;

    @Autowired
    public BookTableController(BookTableRepository bookTableRepository) {
        this.bookTableRepository = bookTableRepository;
    }

    @GetMapping
    public List<BookTable> getAllBookTables() {
        return bookTableRepository.findAll();
    }

    @PostMapping("/reserve/{tableNumber}")
    public ResponseEntity<String> reserveTable(@PathVariable int tableNumber) {
        try {
            BookTable bookTable = bookTableRepository.findByNumber(tableNumber);

            if (bookTable == null) {
                throw new TableNotFoundException("Book table not found");
            }

            if (bookTable.isReserved()) {
                throw new TableAlreadyReservedException("Book table is already reserved");
            }

            bookTable.setReserved(true);
            bookTableRepository.save(bookTable);

            return ResponseEntity.ok("Book table reserved successfully");
        } catch (TableNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (TableAlreadyReservedException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }
}
