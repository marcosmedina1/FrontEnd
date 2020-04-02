import { Component, OnInit } from '@angular/core';
import { MessageService } from '../Services/message.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  myMsg: string[];
  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.myMsg = this.messageService.message;
  }

}
