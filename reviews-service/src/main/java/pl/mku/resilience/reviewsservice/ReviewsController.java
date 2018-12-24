package pl.mku.resilience.reviewsservice;

import java.util.Random;
import java.util.concurrent.TimeUnit;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REVIEWS
 */
@RestController
public class ReviewsController {

    @RequestMapping("/reviews")
    public String details() throws InterruptedException {
        return "This product is great!";
    }

}
