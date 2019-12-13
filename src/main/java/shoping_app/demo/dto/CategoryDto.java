package shoping_app.demo.dto;

import org.springframework.data.annotation.Id;

// objekti qe nk permban brenda produktet e nje kategorie
public class CategoryDto {
    @Id
    private String id;
    private String title;
    private String image;

    public String getId() {
        return id;
    }

    public CategoryDto() {
    }

    public CategoryDto(String id, String title) {
        this.id = id;
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
