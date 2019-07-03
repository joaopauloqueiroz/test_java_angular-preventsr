package com.log.rest.log_rest.repositorie;
import com.log.rest.log_rest.models.Log;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface LogRepositoy extends JpaRepository<Log, Long>{
    Log deleteById(long id);
    List findByIp(String ip);
    List findAllByDateGreaterThanEqualAndDateLessThanEqual(Date start, Date end);
}
