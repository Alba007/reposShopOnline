package shoping_app.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shoping_app.demo.models.Shopping_chart;
import shoping_app.demo.repos.ShopCartRepos;

import java.util.List;

@Service
public class ShopCartService {
    @Autowired
    private ShopCartRepos shopCartRepos;

    public List<Shopping_chart> getAll() {
        return shopCartRepos.findAll();
    }

    public Shopping_chart getAllProductsOfUser(String user_id) {
        return shopCartRepos.findAllByUser_id(user_id);
    }

    public Shopping_chart getShopCartById(String id) {
        return shopCartRepos.findById(id).orElse(null);
    }

    public Shopping_chart postShopCart(Shopping_chart shopCart) {
        return shopCartRepos.save(shopCart);
    }

    public Shopping_chart putShopingCart(String id, Shopping_chart shopCart) {
        shopCart.setId(id);
        return shopCartRepos.save(shopCart);
    }

    public void deleteShopCart(String id) {
        shopCartRepos.delete(shopCartRepos.findById(id).get());
    }
}
