package shoping_app.demo.controllers;

import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;
import shoping_app.demo.models.AddCategory;
import shoping_app.demo.models.AddProduct;
import shoping_app.demo.models.Products;
import shoping_app.demo.services.ProductService;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("products")
public class ProductController {

    private final SimpMessagingTemplate template;

    @Autowired
    ProductController(SimpMessagingTemplate template) {
        this.template = template;
    }

    @Autowired
    private ProductService serviceProd;

    @GetMapping
    public List<Products> getAllProd() {
        return serviceProd.getAllProducts();
    }

    @GetMapping(value = "/byDesc/{description}")
    public List<Products> getAllProductByDescription(@PathVariable String description) {
        return serviceProd.findAllProductsByDescription(description);
    }

    @GetMapping(value = "/byCategory/{category_id}")
    public List<Products> getAllProductByCategodyId(@PathVariable String category_id) {
        return serviceProd.getProductsByCategoryId(category_id);
    }

    @GetMapping(value = "/byId/{id}")
    public Products getProdById(@PathVariable String id) {
        return serviceProd.getOneProduct(id);
    }

    @PostMapping()
    public Products addProduct(@Valid @RequestBody Products product) {
        AddProduct productAdd = new AddProduct(product.getId(), product.getDescription(), product.getSpecification(), product.getReview(), product.getImage(), product.getCategory_id(), "post");
        serviceProd.postProduct(product);
        this.template.convertAndSend("/send/product", productAdd.toString(product));
        return product;


    }

    @PutMapping("/{id}")
    public Products editProduct(@PathVariable String id, @Valid @RequestBody Products product) {
        AddProduct productAdd = new AddProduct(product.getId(), product.getDescription(), product.getSpecification(), product.getReview(), product.getImage(), product.getCategory_id(), "put");
        serviceProd.putProduct(id, product);
        this.template.convertAndSend("/send/product", productAdd.toString(product));
        return product;

    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable String id) {
        serviceProd.deleteProduct(id);
        this.template.convertAndSend("/send/product", "delete");
    }
}
