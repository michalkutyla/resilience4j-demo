package pl.mku.resilience.reviewsservice;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REVIEWS
 */
@RestController
public class ReviewsController {

    @RequestMapping("/reviews")
    public String details() throws InterruptedException {
        return dummyReviews;
    }

    private static String dummyReviews = "[" +
        "\"This product is great!\"," +
        "\"This product is worthless :(\"," +
        "\"I love this product :D\"" +
        "]";

}
