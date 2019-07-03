import { LogService } from './../../services/log.service';
import { Component, OnInit, Directive } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-send-arquive',
  templateUrl: './send-arquive.component.html',
  styleUrls: ['./send-arquive.component.css']
})
export class SendArquiveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private logService: LogService) { }
  uploadForm: FormGroup;
  errors: string
  condition: boolean
  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: [''],
    });
    this.condition = false
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    this.logService.sendFile(formData).subscribe((data) => {
      this.condition = false
    }, (error) => {
      this.condition = true
      this.errors = 'Erro ao enviar arquivo, tente novamente'
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }
}
