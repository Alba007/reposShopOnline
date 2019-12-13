package shoping_app.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import shoping_app.demo.components.JwtTkenProvider;
import shoping_app.demo.dto.UserDto;
import shoping_app.demo.models.AuthBody;
import org.springframework.security.core.userdetails.UserDetails;

import shoping_app.demo.repos.UserRepos;
import shoping_app.demo.services.UserDetailsServicee;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    JwtTkenProvider jwtTokenProvider;

    @Autowired
    UserRepos users;

    @Autowired
    private UserDetailsServicee userService;

    @Autowired
    private UserController userController;

    @SuppressWarnings("rawtypes")
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AuthBody data) {
        try {
            //sapo useri logohet i marrim usernamein
            String username = data.getUsername();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, data.getPassword()));
            UserDetails userDetails = this.userService.loadUserByUsername(username);
            //gjenerohet tokeni bazuar ne te dhenat qe ka vendosur useri
            String token = jwtTokenProvider.createToken(username);
            Map<Object, Object> model = new HashMap<>();
            UserDto userDto = userController.getUSerByUsername(username);
            model.put("user", userDto);
            model.put("token", token);
            //na kthehet tokeni ne front
            return ResponseEntity.ok(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username/password supplied");
        }
    }

//    @SuppressWarnings("rawtypes")
//    @PostMapping("/register")
//    public ResponseEntity register(@RequestBody Users user) {
//        Users userExists = users.findByUsername(user.getUsername());
//        if (userExists != null) {
//            throw new BadCredentialsException("User with username: " + user.getUsername() + " already exists");
//        }
//        Map<Object, Object> model = new HashMap<>();
//        model.put("message", "User registered successfully");
//        return ResponseEntity.ok(model);
//    }


}
