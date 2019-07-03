import { LogService } from './../../services/log.service';
import { Component, OnInit, Directive } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class CreateComponent implements OnInit {
errors: []
condition: boolean
  constructor( private formBuilder: FormBuilder, private logService: LogService) { }


  logForm: FormGroup;
  request:string='';
  ip:string='';
  status:number=null;
  date:Date=null;
  userAgent:String='';

  ngOnInit() {
    
    this.logForm = this.formBuilder.group({
      'request' : [null, Validators.required],
      'ip' : [null, Validators.required],
      'status' : [null, Validators.required],
      'userAgent' : [null, Validators.required],
      'date' : [null, Validators.required],
    })
    this.condition = false
  }

  onFormSubmit(form:NgForm){
    form["date"] = moment(Date.parse(form["date"])).format("YYYY-MM-DD HH:mm:ss.SSS");
    this.logService.generate(form).subscribe((data) => {
      this.condition = false
    },
    (error) => {
      this.condition = true
      this.errors = error.error.errors
      console.log(this.errors)
    });
  }
}

