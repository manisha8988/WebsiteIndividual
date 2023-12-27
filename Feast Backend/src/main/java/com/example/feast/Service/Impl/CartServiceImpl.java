package com.example.feast.Service.Impl;


import com.example.feast.Entity.Cart;
import com.example.feast.Pojo.CartPojo;
import com.example.feast.Repo.CartRepo;
import com.example.feast.Service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final CartRepo cartRepo;
    @Override
    public String saveCart(CartPojo cartPojo) {
        Cart cart=new Cart();

        cartRepo.save(cart);
        return "Saved";

    }

    @Override
    public List<Cart> getAll() {
        return cartRepo.findAll();
    }

    @Override
    public void deleteById(Long id) {
        cartRepo.deleteById(id);
    }

}


