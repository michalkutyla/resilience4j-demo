package pl.mku.resilience.reviewsservice;

import java.util.Arrays;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewsController {

    @RequestMapping(path = "/reviews")
    public List<String> details() {
        return Arrays.asList(
            "This product is great!",
            "This product is worthless :(",
            "I love this product :D");
    }

}
