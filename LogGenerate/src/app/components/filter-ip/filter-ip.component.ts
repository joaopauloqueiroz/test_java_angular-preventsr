import { LogService } from './../../services/log.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as moment from 'moment';
import { log } from 'util';

@Component({
  selector: 'app-filter-ip',
  templateUrl: './filter-ip.component.html',
  styleUrls: ['./filter-ip.component.css']
})
export class FilterIpComponent implements OnInit {

  logs: Array<any>;
  constructor(private formBuilder: FormBuilder, private logService: LogService) { }
  logFilter: FormGroup;
  ip:string=null;
  errors: string
  condition: boolean
  ngOnInit() {
    this.logFilter = this.formBuilder.group({
      'ip' : [null, Validators.required],
    })
    this.condition = false
  }

  onFormSubmit(form:NgForm){
    this.getIp(form);
  }

  getIp(form){
    this.logService.getIp(form).subscribe((data) => {
        this.logs=data;
        this.condition = false
      }, error => {
        this.condition = true
        this.errors = error.error.message
      }
    )
  }

  delete(id){
    this.logService.delete(id).subscribe((data) => {

    }, (err) => {
      this.condition = true
        this.errors = "Erro ao deletar log";
    });

    let newLogs = this.logs;
    for(let x=0;x<newLogs.length;x++){
      if(newLogs[x].id == id){
        newLogs.splice(x, 1);
        break;
      }
    }
    this.logs = newLogs;
  }

}
