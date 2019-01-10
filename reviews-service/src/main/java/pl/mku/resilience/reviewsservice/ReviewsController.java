package pl.mku.resilience.reviewsservice;

import java.util.Arrays;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewsController {

    private int i = 0;

    @RequestMapping(path = "/reviews")
    public List<String> details() {
        if (i++ % 2 == 0) {
            throw new RuntimeException();
        }
        return Arrays.asList(
            "This product is great!",
            "This product is worthless :(",
            "I love this product :D");
    }

}
