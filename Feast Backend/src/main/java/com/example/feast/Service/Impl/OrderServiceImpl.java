package com.example.feast.Service.Impl;

import com.example.feast.Entity.Item;
import com.example.feast.Entity.Order;
import com.example.feast.Entity.User;
import com.example.feast.Pojo.OrderPojo;
import com.example.feast.Repo.ItemRepo;
import com.example.feast.Repo.OrderRepo;
import com.example.feast.Repo.UserRepo;
import com.example.feast.Service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepo orderRepo;
    private final UserRepo userRepo;
    private final ItemRepo itemRepo;

    @Override
    public String save(OrderPojo orderPojo) {
        long orderId = orderPojo.getId();
        Order order = new Order();

        if (orderPojo.getId() != null){
            order = orderRepo.findById(orderId).get();
        }
        User user=userRepo.findById(orderPojo.getUser().getId()).get();
        order.setUser(user);

        Item item=itemRepo.findById(orderPojo.getItem().getId()).get();
        order.setItem(item);

        order.setQuantity(orderPojo.getQuantity());

        return orderRepo.save(order).getUser().getEmail();
    }

    @Override
    public List<Order> getALl() {
        return null;
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



