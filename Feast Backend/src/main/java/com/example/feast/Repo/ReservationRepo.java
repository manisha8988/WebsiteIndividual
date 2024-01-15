package com.example.feast.Repo;


import com.example.feast.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ReservationRepo extends JpaRepository<Reservation,Integer> {

}
