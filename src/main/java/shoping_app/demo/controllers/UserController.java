package shoping_app.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shoping_app.demo.dto.UserDto;
import shoping_app.demo.models.Users;
import shoping_app.demo.services.UserService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserDto> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("byUsername/{username}")
    public UserDto getUSerByUsername(@PathVariable String username) {
        return userService.findByUsername(username);

    }

    @GetMapping("byId/{id}")
    public UserDto getUserById(@PathVariable String id) {
        return userService.getUserById(id);
    }

    @PostMapping()
    public UserDto addUser(@RequestBody Users user) {
        return userService.postUser(user);

    }

    @PutMapping("/{id}")
    public UserDto editUser(@PathVariable String id, @RequestBody Users user) {
        return userService.putUser(id, user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
    }
}
