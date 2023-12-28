package com.example.feast.Pojo;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EventTypePojo {
    private Long id;

    @NotNull
    private String birthday;

    @NotNull
    private String anniversary;

    @NotNull
    private String affordable;

    @NotNull
    private String economical;

    @NotNull
    private String premium;
}
