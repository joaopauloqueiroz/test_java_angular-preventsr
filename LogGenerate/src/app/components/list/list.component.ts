import { LogService } from './../../services/log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  logs: Array<any>;
  preloader: true;
  condition: boolean
  constructor(private logService: LogService) { }

  ngOnInit() {
    this.condition = true
    this.getLogs()
  }

  getLogs(){
    this.logService.getAllLogs().subscribe((data) => {
        this.logs = data;
        this.condition = false
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
