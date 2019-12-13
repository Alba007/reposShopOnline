package shoping_app.demo.services;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shoping_app.demo.dto.UserDto;
import shoping_app.demo.models.Users;
import shoping_app.demo.repos.UserRepos;

import java.util.*;

@Service
public class UserService {

    @Autowired
    private UserRepos userRepos;

    public List<UserDto> getAllUsers() {
        List<UserDto> userDtoList = new ArrayList<UserDto>();
        List<Users> usersList = userRepos.findAll();
        for (int i = 0; i < usersList.size(); i++) {
            userDtoList.add(convertUserToUserDto(usersList.get(i)));
        }
        return userDtoList;
    }

    public UserDto getUserById(String id) {
        return convertUserToUserDto(Objects.requireNonNull(userRepos.findById(id).orElse(null)));

    }

    public UserDto findByUsername(String username) {
        return convertUserToUserDto(userRepos.findByUsername(username));
    }

    public UserDto postUser(Users user) {
        userRepos.save(user);
        return convertUserToUserDto(user);
    }

    public UserDto putUser(String id, Users user) {
        user.setId(id);
        return convertUserToUserDto(userRepos.save(user));
    }

    public void deleteUser(String id) {
        userRepos.delete(userRepos.findById(id).get());
    }

    private UserDto convertUserToUserDto(Users user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setUsername(user.getUsername());
        userDto.setRole(user.getRole());
        return userDto;

    }
}
