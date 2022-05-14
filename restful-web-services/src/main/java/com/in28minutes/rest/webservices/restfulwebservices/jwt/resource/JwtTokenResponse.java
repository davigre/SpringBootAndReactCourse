package com.in28minutes.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

import lombok.Getter;

@Getter
public class JwtTokenResponse implements Serializable {

    private static final long serialVersionUID = 8317676219297719109L;

    private final String token;

    public JwtTokenResponse(String token) {
        this.token = token;
    }

}