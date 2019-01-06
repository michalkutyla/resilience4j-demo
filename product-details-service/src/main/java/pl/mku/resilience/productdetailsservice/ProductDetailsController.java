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
        return dummyDetails;
    }

    private static String dummyDetails = "{" +
        "\"name\":\"Xiomi Mi Notebook\"," +
        "\"description\":\"Uncompromising performance in an ultra light, ultra thin body.\"" +
        "}";

}
