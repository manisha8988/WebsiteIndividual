//package com.example.feast.Controller;
//
//import com.example.feast.Entity.TableReservation;
//import com.example.feast.Repo.TableReservationRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/tableReservations")  // Added a base path for the controller
//public class TableReservationController {
//
//    @Autowired
//    private TableReservationRepo tableReservationRepo;
//
//    @GetMapping("/getAllTableReservation")
//    public ResponseEntity<List<TableReservation>> getAllTableReservation() {
//        try {
//            List<TableReservation> tableReservationsList = new ArrayList<>();
//            tableReservationRepo.findAll().forEach(tableReservationsList::add);
//
//            if (tableReservationsList.isEmpty()) {
//                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            }
//            return new ResponseEntity<>(tableReservationsList, HttpStatus.OK);
//
//        } catch (Exception ex) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    @GetMapping("/getTableReservationById/{id}")
//    public ResponseEntity<TableReservation> getTableReservationById(@PathVariable Long id) {
//        Optional<TableReservation> tableReservation = tableReservationRepo.findById(id);
//
//        if (tableReservation.isPresent()) {
//            return new ResponseEntity<>(tableReservation.get(), HttpStatus.OK);
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//
//    @PostMapping("/addTableReservation")
//    public ResponseEntity<Void> addTableReservation(@RequestBody TableReservation tableReservation) {
//        try {
//            TableReservation tableReservationObj = tableReservationRepo.save(tableReservation);
//            return new ResponseEntity<>(HttpStatus.CREATED);
//        } catch (Exception ex) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    @PutMapping("/updateTableReservationById/{id}")  // Assuming you want to update by ID
//    public ResponseEntity<Void> updateTableReservationById(@PathVariable Long id, @RequestBody TableReservation tableReservation) {
//        try {
//            Optional<TableReservation> existingTableReservation = tableReservationRepo.findById(id);
//
//            if (existingTableReservation.isPresent()) {
//                // Update the existing entity with new values from tableReservation
//                // ...
//                tableReservationRepo.save(existingTableReservation.get());
//                return new ResponseEntity<>(HttpStatus.OK);
//            }
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        } catch (Exception ex) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    @DeleteMapping("/deleteTableReservationById/{id}")
//    public ResponseEntity<Void> deleteTableReservationById(@PathVariable Long id) {
//        try {
//            tableReservationRepo.deleteById(id);
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } catch (Exception ex) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//}
