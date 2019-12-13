package shoping_app.demo.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shoping_app.demo.dto.CategoryDto;
import shoping_app.demo.models.Category;
import shoping_app.demo.repos.CategoryProductRepos;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryProdService {
    @Autowired
    private CategoryProductRepos categoryRepos;

    public List<Category> allProducts() {
        return categoryRepos.findAll();
    }

    public List<CategoryDto> categoriesNoProducts() {
        // krijohet lista bosh
        List<CategoryDto> categDto = new ArrayList<>();
        List<Category> categories = categoryRepos.findAll();
        for (int i = 0; i < categories.size(); i++) {
            categDto.add(convertToCategoryNoProducts(categories.get(i)));
        }
        return categDto;
    }

    public Category findOneCategory(String id) {
        return categoryRepos.findById(id).orElse(null);
    }

    public Category postCategory(Category category) {
        return categoryRepos.save(category);
    }

    public Category putCategory(String id, Category category) {
        category.setId(id);
        return categoryRepos.save(category);
    }

    public void deleteCategory(String id) {
        categoryRepos.delete(categoryRepos.findById(id).get());
    }

    public CategoryDto convertToCategoryNoProducts(Category category) {
        CategoryDto caategDto = new CategoryDto();
        caategDto.setId(category.getId());
        caategDto.setTitle(category.getTitle());
        caategDto.setImage(category.getImage());
        return caategDto;
    }
}
