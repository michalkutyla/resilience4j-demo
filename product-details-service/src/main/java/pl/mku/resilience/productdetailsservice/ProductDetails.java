package pl.mku.resilience.productdetailsservice;

public class ProductDetails {
    private String name;
    private String description;

    public ProductDetails(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}
