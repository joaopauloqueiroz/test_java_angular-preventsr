package com.log.rest.log_rest.services;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.util.Date;

public class Logger implements Serializable {
    private HttpServletRequest requestOne;

    public Logger(HttpServletRequest req) {
        this.requestOne = req;

    }

    public Object createObject(){

        return null;
    }
}
