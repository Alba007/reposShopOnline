package shoping_app.demo.repos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import shoping_app.demo.models.Category;
@Repository
public interface CategoryProductRepos extends MongoRepository<Category,String> {
}
