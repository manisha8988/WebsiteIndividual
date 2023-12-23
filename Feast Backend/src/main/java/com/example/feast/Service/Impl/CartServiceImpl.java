//package com.example.feast.Service.Impl;
//
//import com.example.feast.Entity.Cart;
//import com.example.feast.Entity.Category;
//import com.example.feast.Pojo.CategoryPojo;
//import com.example.feast.Repo.CartRepo;
//
//public class CartServiceImpl implements CartServiceImpl{
//
//    private CartRepo cartRepo;
//    @Override
//    public void saveCart(CartPojo cartPojo){
//        Cart cart=new Cart();
//
//        cart.setName(cartPojo.getName());
//
//        if(cartPojo.getId()!=null){
//            cart=cartRepo.findById(cartPojo.getId()).get();
//        }
//
//
//        cartRepo.save(cart); // insert query
//    }
//}
