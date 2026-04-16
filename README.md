# FOSS Dependency Disclosure

This project generates and exposes open-source dependency license information for compliance and transparency purposes.

## Build

```bash
./gradlew generateLicenseReport build -x test
```

This command generates the license report and builds the application, skipping tests.

## Running

Once built, start the application and access the dependency license report at:

```
http://localhost:8080/dependency-license/index.html
```
