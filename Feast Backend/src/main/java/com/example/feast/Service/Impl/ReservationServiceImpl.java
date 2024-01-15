package com.example.feast.Service.Impl;


import com.example.feast.Entity.Reservation;
import com.example.feast.Pojo.ReservationPojo;
import com.example.feast.Repo.ReservationRepo;
import com.example.feast.Service.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepo reservationRepo;
    @Override
    public void saveReservation(ReservationPojo reservationPojo){
        Reservation reservation=new Reservation();

        if(reservationPojo.getId()!=null){
            reservation=reservationRepo.findById(reservationPojo.getId()).get();
        }

        reservation.setName(reservationPojo.getName());
        reservation.setPhone(reservationPojo.getPhone());
        reservation.setPersons(reservationPojo.getPersons());
        reservation.setDate(reservationPojo.getDate());

        reservation.setId(reservationPojo.getId());

        reservationRepo.save(reservation); // insert query
        System.out.println("Table Reserved Successfully");

    }


    @Override
    public List<Reservation> findAll() {
        return reservationRepo.findAll();
    }

    @Override
    public void deleteById(Integer id) {
        reservationRepo.deleteById(id);
    }

    @Override
    public Optional<Reservation> findById(Integer id) {
        return reservationRepo.findById(id);
    }
}
