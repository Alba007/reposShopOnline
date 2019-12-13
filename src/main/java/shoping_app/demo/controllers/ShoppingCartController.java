package shoping_app.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shoping_app.demo.models.Shopping_chart;
import shoping_app.demo.services.ShopCartService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("cards")
public class ShoppingCartController {
    @Autowired
    private ShopCartService shopCartService;

    @GetMapping
    public List<Shopping_chart> getAll() {
        return shopCartService.getAll();
    }

    @GetMapping("/prodOfUser/{user_id}")
    public Shopping_chart getAllProdOfUSer(@PathVariable String user_id) {
        return shopCartService.getAllProductsOfUser(user_id);
    }

    @GetMapping(value = "/{id}")
    public Shopping_chart getById(@PathVariable String id) {
        return shopCartService.getShopCartById(id);
    }

    @PostMapping
    public Shopping_chart addShopCart(@RequestBody Shopping_chart shop_cart) {
        return shopCartService.postShopCart(shop_cart);
    }

    @PutMapping(value = "/{id}")
    public Shopping_chart editShopCart(@PathVariable String id, @RequestBody Shopping_chart shoping_cart) {
        return shopCartService.putShopingCart(id, shoping_cart);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteShoppingCart(@PathVariable String id) {
        shopCartService.deleteShopCart(id);
    }
}
