package pl.mku.resilience.gateway;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class GatewayController {

    @RequestMapping(path = "/gateway/reviews")
    public List<String> reviews() {
        return callReviewsService();
    }

    private List<String> callReviewsService() {
        return new RestTemplate().getForObject("http://localhost:8090/reviews", List.class);
    }

    @RequestMapping(path = "/gateway/details")
    public ProductDetails details() {
        return callProductDetailsService();
    }

    private ProductDetails callProductDetailsService() {
        return new RestTemplate().getForObject("http://localhost:8070/details", ProductDetails.class);
    }

}
