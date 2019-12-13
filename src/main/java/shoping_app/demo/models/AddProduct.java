package shoping_app.demo.models;

import com.google.gson.Gson;

public class AddProduct extends Products {
    private String action;


    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public AddProduct(String id, String description, String specification, Integer review, String image, String category_id, String action) {
        super(id, description, specification, review, image, category_id);
        this.action = action;
    }

    public String toString(Products product) {
        return new Gson().toJson(product);
    }
}
