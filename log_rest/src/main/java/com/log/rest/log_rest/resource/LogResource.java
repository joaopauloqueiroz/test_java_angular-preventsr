package com.log.rest.log_rest.resource;

import com.log.rest.log_rest.errors.ResourceNotFoundException;
import com.log.rest.log_rest.models.Log;
import com.log.rest.log_rest.repositorie.LogRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value="/api")
public class LogResource {
    @Autowired
    LogRepositoy logRepositoy;
    /**
     * List all logs
     * @return
     */
    @GetMapping("/logs")
    public List<Log> getLogs() {
        return logRepositoy.findAll();
    }

    /**
     * Insert item
     * @param log
     * @return
     */
    @PostMapping("/create")
    public ResponseEntity<?> createLog(@Valid @RequestBody Log log) {
        log = logRepositoy.save(log);
        return new ResponseEntity<>(log, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@Valid @PathVariable long id){
        logRepositoy.deleteById(id);
    }

    @PostMapping("/findip")
    public ResponseEntity<?> findByIp(@Valid @RequestBody Map<String, Object> body) throws ResourceNotFoundException {
        verifyExistIp(body.get("ip").toString());
        List ips = logRepositoy.findByIp(body.get("ip").toString());
        return new ResponseEntity<>(ips, HttpStatus.OK);
    }

    @PostMapping("/findate")
    public ResponseEntity findAllByDateBetween(@RequestBody Map<String, Object> body) throws ParseException {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        Date start = formatter.parse(body.get("init").toString());
        Date end = formatter.parse(body.get("finish").toString());
        verifyPeriod(start, end);

        return new ResponseEntity<>(logRepositoy.findAllByDateGreaterThanEqualAndDateLessThanEqual(start, end), HttpStatus.OK);
    }

    /**
     * Verify ip exist in database
     * @param ip
     */
    private void verifyExistIp(String ip){
        List ips = logRepositoy.findByIp(ip);
        if(ips.isEmpty()){
            throw new ResourceNotFoundException("Ip address not found");
        }
    }

    /**
     * Verify rande of dates exists
     * @param start
     * @param end
     */
    private void verifyPeriod(Date start, Date end){
        List dates = logRepositoy.findAllByDateGreaterThanEqualAndDateLessThanEqual(start, end);
        if(dates.isEmpty()){
            throw new ResourceNotFoundException("Date range not found");
        }
    }
}
