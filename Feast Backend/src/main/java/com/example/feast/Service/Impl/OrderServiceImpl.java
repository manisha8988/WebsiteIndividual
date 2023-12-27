package com.example.feast.Service.Impl;

import com.example.feast.Entity.Order;
import com.example.feast.Pojo.OrderPojo;
import com.example.feast.Repo.OrderRepo;
import com.example.feast.Service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepo orderRepo;
    @Override
    public String save(OrderPojo orderpojo) {
        Order order = new Order();

        return "saved";
    }

    @Override
    public List<Order> getALl() {
        return this.orderRepo.findAll();
    }

    @Override
    public void deleteBYId(Long id) {
        orderRepo.deleteById(id);
    }

    @Override
    public Optional<Order> getById(Long id) {
        return Optional.empty();
    }

    @Override
    public String update(Long id, OrderPojo orderpojo) {
        return null;
    }
}
