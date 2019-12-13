package shoping_app.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shoping_app.demo.models.Products;
import shoping_app.demo.repos.ProductRepos;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepos prodRepos;

    public List<Products> getAllProducts() {
        return prodRepos.findAll();
    }
    public List<Products> getProductsByCategoryId(String category_id) {
        return prodRepos.findAllByCategoryId(category_id);
    }
    public Products getOneProduct(String id) {
        return prodRepos.findById(id).orElse(null);
    }

    public List<Products> findAllProductsByDescription(String description) {
        return prodRepos.findAllByDescription(description);
    }

    public Products postProduct(Products product) {
        prodRepos.save(product);
        return product;
    }

    public Products putProduct(String id, Products product) {
        product.setId(id);
        prodRepos.save(product);
        return product;
    }

    public void deleteProduct(String id) {
        prodRepos.delete(prodRepos.findById(id).get());
    }
}

