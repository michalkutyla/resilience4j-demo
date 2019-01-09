package pl.mku.resilience.gateway;

public class ProductDetails {
    private String name;
    private String description;

    public ProductDetails(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public ProductDetails() {
    }

    public ProductDetails setDescription(String description) {
        this.description = description;
        return this;
    }

    public ProductDetails setName(String name) {
        this.name = name;
        return this;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}
