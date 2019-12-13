package shoping_app.demo.repos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import shoping_app.demo.models.Products;

import java.util.List;

@Repository
public interface ProductRepos extends MongoRepository<Products, String> {
    List<Products> findAllByDescription(String title);
    List<Products> findAllByCategoryId(String category_id);
}
