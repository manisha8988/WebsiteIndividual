package com.example.feast.mapper;
import com.example.feast.Pojo.EventPojo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface EventMapper {

    @Select("select  ib.id , u.username , u.phone_number, c.name , i.item_name , ib.item_quantity , ib.item_price , ib.status from items ib \n" +
            "inner join users u on ib.id = u.id\n" +
            "inner join item i on i.id = ib.id\n" +
            "inner join eventType et on et.id = et.id\n" +

            " inner join categories c on c.id = i.category_id"

    )
    List<EventPojo> getAll();
}
