package com.in28minutes.rest.webservices.restfulwebservices;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class HelloWorldBean {

    private String message;

    public HelloWorldBean(String message) {

        this.message = message;

    }

}
