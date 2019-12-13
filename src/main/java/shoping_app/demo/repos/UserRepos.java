package shoping_app.demo.repos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import shoping_app.demo.models.Users;

import java.util.List;
@Repository
public interface UserRepos extends MongoRepository<Users, String> {
    Users findByUsername(String username) ;
}
