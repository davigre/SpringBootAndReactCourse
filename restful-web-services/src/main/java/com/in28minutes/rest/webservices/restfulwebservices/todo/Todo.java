package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Todo {

    private long id;
    private String username;
    private String description;
    private Date targetDate;
    private boolean isDone;

}
