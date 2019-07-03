package com.log.rest.log_rest.resource;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.log.rest.log_rest.models.Log;
import com.log.rest.log_rest.repositorie.LogRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping(value="/api")
public class FileUpload {

    @Autowired
    LogRepositoy logRepositoy;
    public static String uploadDirectory = System.getProperty("user.dir")+"/upload";

    @PostMapping("/fileupload")
    public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile files) throws IOException, ParseException {
        System.out.println("aaa");
        Path fileNamePath = Paths.get(uploadDirectory, files.getOriginalFilename());
        Files.write(fileNamePath, files.getBytes());

        FileInputStream fstream = new FileInputStream(fileNamePath.toString());
        BufferedReader br = new BufferedReader(new InputStreamReader(fstream));
        String strLine;
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");

        while ((strLine = br.readLine()) != null)   {
            String [] texts = strLine.split("\\|");
            Log log = new Log();
            log.setDate(formatter.parse(texts[0].toString()));
            log.setIp(texts[1]);
            log.setRequest(texts[2].replace("\"", ""));
            log.setStatus(Integer.parseInt(texts[3]));
            log.setUserAgent(texts[4].replaceAll("\"",""));
            logRepositoy.save(log);
        }

        fstream.close();
        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }
}
