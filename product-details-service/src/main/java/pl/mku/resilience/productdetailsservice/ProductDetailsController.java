package pl.mku.resilience.productdetailsservice;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * PRODUCT DETAILS
 */
@RestController
public class ProductDetailsController {

    @RequestMapping("/details")
    public String details() {
        return "Xiaomi Mi Notebook";
    }

}
