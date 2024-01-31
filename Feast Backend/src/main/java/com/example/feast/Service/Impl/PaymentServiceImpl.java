package com.example.feast.Service.Impl;

import com.example.feast.Entity.Payment;
import com.example.feast.Entity.User;
import com.example.feast.Pojo.PaymentPojo;
import com.example.feast.Repo.PaymentRepo;
import com.example.feast.Repo.UserRepo;
import com.example.feast.Service.PaymentService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepo paymentRepo;
    private final UserRepo userRepo;

    @Override
    public Payment savePayment(PaymentPojo paymentPojo) {
        Payment payment = new Payment();

        if (paymentPojo.getId() != null) {
            Optional<Payment> existingPayment = paymentRepo.findById(paymentPojo.getId());
            if (existingPayment.isPresent()) {
                payment = existingPayment.get();
            } else {
                throw new IllegalArgumentException("Payment with id " + paymentPojo.getId() + " not found");
            }
        }

        // Validate paymentPojo fields if necessary

//        payment.setOrderId(paymentPojo.getOrderId());
        payment.setSubTotal(paymentPojo.getSubTotal());
        payment.setDeliveryFee(paymentPojo.getDeliveryFee());
        payment.setTotal(paymentPojo.getTotal());
        payment.setStatus("Pending");

        User user = userRepo.findById(paymentPojo.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + paymentPojo.getUserId()));

        payment.setUser(user);

        paymentRepo.save(payment);
        // Use a logging framework in production
        System.out.println("Payment processed successfully");
        return payment;
    }

    @Override
    public List<Payment> findAll() {
        return paymentRepo.findAll();
    }

    @Override
    public Optional<Payment> findById(Long id) {
        return paymentRepo.findById(id);
    }

    @Override
    public Integer deleteById(Long id) {
        return null;
    }

}
