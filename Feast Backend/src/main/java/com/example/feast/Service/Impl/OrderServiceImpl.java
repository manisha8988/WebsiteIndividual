package com.example.feast.Service.Impl;

import com.example.feast.Entity.Cart;
import com.example.feast.Entity.Item;
import com.example.feast.Entity.Order;
import com.example.feast.Entity.User;
import com.example.feast.Pojo.OrderPojo;
import com.example.feast.Repo.CartRepo;
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
    private final CartRepo cartRepo;

    @Override
    public void save(OrderPojo orderPojo) {
        Order order = new Order();

        if (orderPojo.getId() != null){
            order = orderRepo.findById(order.getId()).get();
        }
        User user=userRepo.findById(orderPojo.getUserId()).get();
        order.setUser(user);

        // Fetch all carts for the user from the database
        List<Cart> carts = cartRepo.findByUserId(orderPojo.getUserId());
//        order.setCarts(carts);

        // Convert the List<String> to a single String (if needed)
        String orderItemsAsString = String.join(", ", orderPojo.getOrderItems());
        // Set the order items as a single String
        order.setOrderItems(orderItemsAsString);

        order.setPayVia(orderPojo.getPayVia());
        order.setPickUpOption(orderPojo.getPickUpOption());
        order.setTotalPrice(orderPojo.getTotalPrice());
        order.setAddress(orderPojo.getAddress());
        order.setPhoneNumber(orderPojo.getPhoneNumber());


        cartRepo.deleteByUserId(orderPojo.getUserId());

        orderRepo.save(order);
        System.out.println(" This Order Saved Successfully");
    }

    @Override
    public List<Order> getAll() {
        return orderRepo.findAll();
    }

    @Override
    public Optional<Order> findById(Long id) {
        return orderRepo.findById(id);
    }

    @Override
    public String update(Long id, OrderPojo orderpojo) {
        return null;
    }
}



