package pl.mku.resilience.reviewsservice;

import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

@ControllerAdvice
public class RestExceptionHandler {
    private static final Logger log = LoggerFactory.getLogger(RestExceptionHandler.class);

    @ExceptionHandler
    public ModelAndView defaultErrorHandler(HttpServletRequest req, Exception e) throws Exception {
        log.error(e.getMessage());
        throw e;
    }
}