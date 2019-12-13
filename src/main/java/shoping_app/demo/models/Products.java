package shoping_app.demo.models;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "product")
public class Products {
    @Id
    private String id;
    private String description;
    private String title;
    private String specification;
    private Integer review;
    private String image;
    private String categoryId;

    public Products(String id, String description, String specification, Integer review, String image, String category_id) {
        this.id = id;
        this.description = description;
        this.specification = specification;
        this.review = review;
        this.image = image;
        this.categoryId = category_id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSpecification() {
        return specification;
    }

    public Products() {
    }

    public void setSpecification(String specification) {
        this.specification = specification;
    }

    public Integer getReview() {
        return review;
    }

    public void setReview(Integer review) {
        this.review = review;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCategory_id() {
        return categoryId;
    }

    public void setCategory_id(String category_id) {
        this.categoryId = category_id;
    }
}
