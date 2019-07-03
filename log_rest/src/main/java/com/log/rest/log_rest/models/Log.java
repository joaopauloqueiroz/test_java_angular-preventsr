package com.log.rest.log_rest.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="TB_LOG")
public class Log implements Serializable{
    /**
     * Define variables to Schema
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

//    @NotEmpty(message = "The date not be blank")
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss.SSS")
    private Date date;
     @NotEmpty(message = "The Ip can not be blank!")
    private String ip;
    @NotEmpty(message = "The Request can not be blank!")
    private String request;
//    @NotEmpty(message = "The Status can not be blank!")
    private int status;
    @NotEmpty(message = "The User Agent can not be blank!")
    private String userAgent;

    /**
     * End definition of variables to Schema
     */

    /**
     *
     * @return
     */

    public long getId() {
        return id;
    }

    /**
     *
     * @param id
     */

    public void setId(long id) {
        this.id = id;
    }

    /**
     *
     * @return
     */
    public Date getDate() {
        return date;
    }

    /**
     *
     * @param date
     */
    public void setDate(Date date) {

        this.date = date;
    }

    /**
     *
     * @return
     */
    public String getIp() {
        return ip;
    }

    /**
     *
     * @param ip
     */
    public void setIp(String ip) {
        this.ip = ip;
    }

    /**
     *
     * @return
     */
    public String getRequest() {
        return request;
    }

    /**
     *
     * @param request
     */
    public void setRequest(String request) {
        this.request = request;
    }

    /**
     *
     * @return
     */
    public int getStatus() {
        return status;
    }

    /**
     *
     * @param status
     */
    public void setStatus(int status) {
        this.status = status;
    }

    /**
     *
     * @return
     */
    public String getUserAgent() {
        return userAgent;
    }

    /**
     *
     * @param userAgent
     */
    public void setUserAgent(String userAgent) {
        this.userAgent = userAgent;
    }


}
