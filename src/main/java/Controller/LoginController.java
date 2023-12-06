package LoginAdmin;

import Entity.Login;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @PostMapping("/login")
    public String login(@RequestBody Login user) {

        if (user.getUsername().equals("admin") && user.getPassword().equals("admin123")) {
            System.out.println("Login Successfull!!!");
            return "Dashboard";
        } else {
            System.out.println("Invalid username and password");
            return "Invalid";
        }
    }
}
