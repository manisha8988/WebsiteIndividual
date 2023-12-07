package com.example.feast.Controller;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("item")
@RequiredArgsConstructor
public class ItemController {
    @PostMapping("save")
    public String saveUser(@Valid @RequestBody ItemPojo itemPojo){
        System.out.println(itemPojo);
        itemService.save(itemPojo);
        return "in this section";
    }

    @GetMapping("getAll")
    public List<Item> getAll(){
        return itemService.getAll();
    }

    @DeleteMapping("deleteById/{id}")
    public void deleteItemById(@PathVariable("id") Long id){
        itemService.deleteById(id);
    }

}
