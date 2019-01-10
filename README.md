# resilience4j demo

### Overview
This is a simple demo which shows how to protect the system from failing after a single microservice starts causing problems.

All examples are implemented using [resilience4j](https://github.com/resilience4j/resilience4j) library.

Patterns are shown on different branches of this repo:
* Retry - branch retry
* Circuit Breaker - branch circuitbreaker
* Bulkhead - branch bulkhead

### Start

In order to start the demo you should
1. Start UI by entering ui-react folder (you need to have npm installed) and executing

```
npm install
npm start
```

UI will be visible at http://localhost:8080

2. Enter gateway, review-service and product-detail-service and execute
```
./gradlew bootRun
```

or on Windows (not tested)
```
./gradlew.bat bootRun
```

You can also run them from your favourite IDE.