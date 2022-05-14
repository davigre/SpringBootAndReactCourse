package com.in28minutes.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class JwtTokenRequest implements Serializable {
  
    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

    public JwtTokenRequest() {
        super();
    }

}

