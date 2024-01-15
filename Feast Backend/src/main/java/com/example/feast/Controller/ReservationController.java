package com.example.feast.Controller;

import com.example.feast.Entity.Reservation;

import com.example.feast.Pojo.ReservationPojo;

import com.example.feast.Service.ReservationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/reservation")
@RequiredArgsConstructor
public class ReservationController {
    private final ReservationService reservationService;

    @PostMapping("/save")
    public String saveUser(@Valid @RequestBody ReservationPojo reservationPojo){
        reservationService.saveReservation(reservationPojo);
        return "Table Reserved Successfully";
    }

    @GetMapping("/findAll")
    public List<Reservation> getAll(){
        return this.reservationService.findAll();
    }

    @GetMapping("/findById/{id}")
    public Optional<Reservation> getById(@PathVariable("id") Integer id){
        return this.reservationService.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Integer id){
        this.reservationService.deleteById(id);
    }

}
