package com.in28minutes.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {

    //GET
    //URI - /hello-world
    //method - "Hello World"

    @GetMapping(path = "/hello-world")
    public String helloWorld() {

        return "Hello World";

    }

    //hello-world-bean
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean() { 

        return new HelloWorldBean("Hello World Bean");

    }

    //hello-world-bean
    @GetMapping(path = "/hello-world-bean/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {

        return new HelloWorldBean(String.format("Hello World, %s", name));
        // throw new RuntimeException("Something went wrong");

    }

}