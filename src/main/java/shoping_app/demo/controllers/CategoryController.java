package shoping_app.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;
import shoping_app.demo.dto.CategoryDto;
import shoping_app.demo.models.AddCategory;
import shoping_app.demo.models.Category;
import shoping_app.demo.services.CategoryProdService;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("category")
public class CategoryController {


    private final SimpMessagingTemplate template;

    @Autowired
    private CategoryProdService serviceCategory;


    @Autowired
    CategoryController(SimpMessagingTemplate template) {
        this.template = template;

    }

    @GetMapping
    public List<Category> getAllCategories() {
        return serviceCategory.allProducts();
    }

    @GetMapping("/noProd")
    public List<CategoryDto> getAllCategoriesNoProducts() {
        return serviceCategory.categoriesNoProducts();
    }

    @GetMapping(value = "/{id}")
    public Category getCategoryById(@PathVariable String id) {
        return serviceCategory.findOneCategory(id);
    }

    @PostMapping
    public Category addCategory(@RequestBody Category category) {
        AddCategory categoryadd = new AddCategory(category.getId(), category.getTitle(), category.getDescription(), category.getImage(), "post");
        serviceCategory.postCategory(category);
        this.template.convertAndSend("/send/category", categoryadd.toString(category));
        return category;
    }

    @PutMapping(value = "/{id}")
    public Category editCategory(@PathVariable String id, @RequestBody Category category) {
        AddCategory categoryadd = new AddCategory(category.getId(), category.getTitle(), category.getDescription(), category.getImage(), "put");
        serviceCategory.putCategory(id, category);
        this.template.convertAndSend("/send/category", categoryadd.toString(category));
        return category;
    }

    @DeleteMapping(value = "/{id}")
    public void deleteCategory(@PathVariable String id) {
        serviceCategory.deleteCategory(id);
        this.template.convertAndSend("/send/category", "delete");
    }
}
