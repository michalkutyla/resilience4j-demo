package pl.mku.resilience.productdetailsservice;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductDetailsController {

    @RequestMapping(path = "/details")
    public ProductDetails details() {
        return new ProductDetails(
            "Xiaomi Mi Notebook",
            "Uncompromising performance in an ultra light, ultra thin body.");
    }

}
