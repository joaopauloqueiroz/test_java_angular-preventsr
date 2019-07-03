import { LogService } from './../../services/log.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as moment from 'moment';
import { log } from 'util';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  logs: Array<any>;
  errors: string
  condition: boolean
  constructor(private formBuilder: FormBuilder, private logService: LogService) { }
  logFilter: FormGroup;
  start:Date=null;
  end:Date=null;

  ngOnInit() {
    this.logFilter = this.formBuilder.group({
      'init' : [null, Validators.required],
      'finish' : [null, Validators.required],
    })
    this.condition = false
  }

  onFormSubmit(form:NgForm){
    form["init"] = moment(Date.parse(form["init"])).format("YYYY-MM-DD HH:mm:ss.SSS");
    form["finish"] = moment(Date.parse(form["finish"])).format("YYYY-MM-DD HH:mm:ss.SSS");
    this.getDate(form);
  }

  getDate(form){
    this.logService.getDate(form).subscribe((data) => {
        this.logs=data;
        this.condition = false
      }, (error) => {
        this.condition = true
        console.log(error.error.message)
        this.errors = error.error.message
      }
    )
  }

  delete(id){
    this.logService.delete(id).subscribe();

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
