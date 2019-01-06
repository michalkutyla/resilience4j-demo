package pl.mku.resilience.gateway;

import io.github.resilience4j.bulkhead.Bulkhead;
import io.github.resilience4j.bulkhead.BulkheadConfig;
import io.github.resilience4j.circuitbreaker.CircuitBreaker;
import io.github.resilience4j.circuitbreaker.CircuitBreakerConfig;
import io.github.resilience4j.retry.Retry;
import java.time.Duration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

/**
 * GATEWAY
 */
@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class GatewayController {

    @RequestMapping(path = "/gateway/reviews", produces = "application/json")
    public String reviews() {
        return callReviewsService();
    }

    private String callReviewsService() {
        return new RestTemplate().getForObject("http://localhost:8090/reviews", String.class);
    }

    @RequestMapping(path = "/gateway/details", produces = "application/json")
    public String details() {
        return callProductDetailsService();
    }

    private String callProductDetailsService() {
        return new RestTemplate().getForObject("http://localhost:8070/details", String.class);
    }

}
