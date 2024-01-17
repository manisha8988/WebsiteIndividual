package com.example.feast.Entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;


@Entity
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    private String username;
    private String password;
    private String confirm_password;
    private String first_name;

    @Column(name="id", nullable = false)
    private long id;

    @Column(name="email", nullable = false, unique = true)
    private String email;

    @Column(name="password", nullable = false)
    private String password;

    @Column(name="confirm_password", nullable = false)
    private String confirmPassword;

    @Column(name="full_name", nullable = false)
    private String fullName;

    @Column(name="last_name",nullable = false)
    private String last_name;

    private String confirm_password;
    private String first_name;
    private String last_name;

    @ManyToMany(mappedBy = "users", fetch = FetchType.LAZY)
    private List<Event> events;




    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirm_password() {
        return confirm_password;
    }

    public void setConfirm_password(String confirm_password) {
        this.confirm_password = confirm_password;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    @ManyToOne(optional = false)
    private Event events;

    public Event getEvents() {
        return events;
    }

    public void setEvents(Event events) {
        this.events = events;
    }
    @Column(name="security_question", nullable = false)
    private String securityQuestion;
    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }
}

