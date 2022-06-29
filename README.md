## Micronaut Boilerplate

This is a boilerplate for micronaut using the following features:
- Groovy
- Spock for testing
- MySQL for Database
  - Flyway
  - Tomcat Connection Pool
- Containerize scripts and DB

### 1-MySQLDB branch
- Add DB dependencies in [build.gradle](/build.gradle)
- Using GORM to create entities in the DB
- Added test for Entity controller and service
- Using a MySQL container to use with the project

Before starting, you need to do the following to set the necessary env.
variable for the Database and then run the database via a container.
```
source set-env-vars.sh
./run-mysql.sh
```
// Note for Self:
// Problems I ran into with initial Boilerplate
// 1. ERROR: no matching manifest for linux/arm64/v8 in the manifest list entries
//        Docker was unable to run image/container using mysql
//        Solution: After looking at documentation, using MariaDB instead of MySQL according to compatibility
// 2. Missing Gradle file
//        Boilerplate being used was missing gradle-wrapper.jar
//        Solution: brew install gradle then run gradle wrapper (you can also supply additional flags to specify versions etc. gradle   //        wrapper --gradle-version 6.2 --distribution-type all)
// 3. Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0
//        Unsupported Java runtime... Either upgrade Gradle version in project or downgrade and run IDE on Java 15