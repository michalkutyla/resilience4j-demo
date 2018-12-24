package pl.mku.resilience.gateway;

import io.github.resilience4j.bulkhead.Bulkhead;
import io.github.resilience4j.bulkhead.BulkheadConfig;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

/**
 * GATEWAY
 */
@RestController
public class GatewayController {

    @RequestMapping("/gateway/reviews")
    public String reviews() {
        return callReviewsService();
    }

    private String callReviewsService() {
        return new RestTemplate().getForObject("http://localhost:8090/reviews", String.class);
    }

    @RequestMapping("/gateway/details")
    public String details() {
        return callProductDetailsService();
    }

    private String callProductDetailsService() {
        return new RestTemplate().getForObject("http://localhost:8070/details", String.class);
    }

}
