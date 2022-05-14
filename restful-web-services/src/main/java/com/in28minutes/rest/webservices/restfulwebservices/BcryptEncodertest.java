package com.in28minutes.rest.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncodertest {

    public static void main(String[] args) {

        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        for(int i = 1; i<=10; i++) {

            String encodedString = bCryptPasswordEncoder.encode("1234");
            System.out.println(encodedString);

        }

    }
    
}
