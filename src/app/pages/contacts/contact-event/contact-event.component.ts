import { Component, Input, OnInit } from '@angular/core';
import { ContactEventItem } from '../../../../libs/api-client';

@Component({
  selector: 'ngx-contact-event',
  templateUrl: './contact-event.component.html',
  styleUrls: ['./contact-event.component.scss']
})
export class ContactEventComponent implements OnInit {

  @Input() contactEvent: ContactEventItem;
  constructor() { }

  ngOnInit(): void {
  }

}
