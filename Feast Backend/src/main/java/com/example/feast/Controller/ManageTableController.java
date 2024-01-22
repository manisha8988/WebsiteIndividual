package com.example.feast.Controller;

import com.example.feast.Entity.ManageTable;
import com.example.feast.Pojo.ManageTablePojo;
import com.example.feast.Service.ManageTableService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("manageTable")
@RequiredArgsConstructor
public class ManageTableController {
    private final ManageTableService manageTableService;

    @PostMapping("save")
    public String saveManageTable(@RequestBody ManageTablePojo manageTablePojo){
        manageTableService.saveManageTable(manageTablePojo);
        return "Table created successfully";
    }

    @GetMapping("/findAll")
    public List<ManageTable> getAll(){
        return this.manageTableService.findAll();
    }

    @GetMapping("/findById/{id}")
    public Optional<ManageTable> getById(@PathVariable("id") Integer id){
        return this.manageTableService.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Integer id){
        this.manageTableService.deleteById(id);
    }

}
