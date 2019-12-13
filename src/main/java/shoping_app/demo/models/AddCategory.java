package shoping_app.demo.models;

import com.google.gson.Gson;

public class AddCategory extends Category{
    private String action;

    public AddCategory(String id, String title, String image, String description, String action) {
        super(id,title,image,description);
        this.action = action;
    }


    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String toString(Category cat) {
        return new Gson().toJson(cat);
//        return "AddSensor{" +
//                "title='" + cat.getTitle() + '\'' +
//                ", id='" + cat.getId() + '\'' +
//                ", description='" + cat.getDescription() + '\'' +
//                ", image=" + cat.getImage() +
//                '}';

    }
}
