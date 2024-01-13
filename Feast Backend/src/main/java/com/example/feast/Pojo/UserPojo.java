package com.example.feast.Pojo;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserPojo {

    @NotNull(message = "Email is required")
    private String email;

    @NotNull(message = "password is required")
    private String password;

    @NotNull
    private String confirmPassword;

    @NotNull
    private String fullName;

    @NotNull
    private String securityQuestion;
}
