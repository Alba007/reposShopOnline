package shoping_app.demo.repos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import shoping_app.demo.models.Shopping_chart;

import java.util.List;

@Repository
public interface ShopCartRepos extends MongoRepository<Shopping_chart, String> {
    @Query(value ="{'user_id' : ?0}")
    public Shopping_chart findAllByUser_id(String user_id);
}
