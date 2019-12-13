package shoping_app.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import shoping_app.demo.models.AuthBody;
import shoping_app.demo.models.Users;
import shoping_app.demo.repos.UserRepos;

import java.nio.file.attribute.UserPrincipal;

@Service
public class UserDetailsServicee implements UserDetailsService {

    @Autowired
    private UserRepos userRepo;
    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;


    @Override
    public AuthBody loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepo.findByUsername(username);
        if (user != null) {
           return new AuthBody(user.getUsername(),bCryptPasswordEncoder.encode(user.getPassword()));
        } else {
            throw new UsernameNotFoundException("username not found");
        }
    }

//    private UserPrincipal buildUserForAuthentication(Users user) {
//        System.out.println("pff");
//      //  System.out.println(new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), null));
//        return new UserPrincipal(user);
//    }
}
