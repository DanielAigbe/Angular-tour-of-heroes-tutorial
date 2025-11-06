import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.html',
  styleUrls: ['./messages.scss']
})
export class Messages {
  constructor(public messageService: MessageService) {}
}
