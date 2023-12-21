package com.example.feast.Service.Impl;

import com.example.feast.Entity.Order;
import com.example.feast.Pojo.OrderPojo;
import com.example.feast.Service.OrderService;

import java.util.List;
import java.util.Optional;

public class OrderServiceImpl implements OrderService {

    @Override
    public String save(OrderPojo orderpojo) {
        return null;
    }

    @Override
    public List<Order> getALl() {
        return null;
    }

    @Override
    public void delete(Long id) {

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
