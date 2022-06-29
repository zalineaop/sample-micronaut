package com.myexample.controller

import com.myexample.domain.User
import com.myexample.service.UserService
import io.micronaut.core.annotation.NonNull
import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.*
import javax.validation.Valid
import javax.validation.constraints.NotNull


@Controller("/user")
class UserController {

    UserService userService

    UserController(UserService userService){
        this.userService = userService
    }

    @Get
    List<User> index() {
        userService.findAll()
    }

    @Post
    User newUser(@Body User user) {
        userService.saveUser(user)
    }

    @Delete(uri = "/{id}")
    void deleteUser(Serializable id) {
        userService.deleteUser(id)
    }
}
