package shoping_app.demo.models;

import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "shopping_cart")
public class Shopping_chart {
    @Id
    private String id;
    private List<String> products;
    @UniqueElements()
    private String user_id;
    public Shopping_chart() {
    }

    public Shopping_chart(String id, List<String> prod, String user_id) {
        this.id = id;
        this.products = prod;

        this.user_id = user_id;
    }

    public String getId() {
        return id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<String> getProd_id() {
        return products;
    }

    public void setProd_id(List<String> prod) {
        this.products = prod;
    }


}
