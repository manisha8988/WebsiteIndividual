package com.example.feast.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface EventMapper {

    @Select("select  ib.id , u.username , u.email , c.category_name , i.item_name , ib.item_quantity , ib.item_price , ib.status from item_booking ib \n" +
            "inner join user u on ib.user_id = u.id\n" +
            "inner join item i on i.id = ib.item_id\n" +
            " inner join category c on c.id = i.category_id"

    )
    List<EventResponse> getAll();
}
