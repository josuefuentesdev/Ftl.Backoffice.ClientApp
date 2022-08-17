import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { ContactsService, GetContactsResponseDto } from '../../../../libs/api-client';

@Component({
  selector: 'ngx-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {

  source: LocalDataSource;

  settings = {
    mode: 'external',
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-compose"></i>',
      confirmDelete: true,
    },
    actions : {
      add: false,
      delete: true,
      edit: false,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      }
    },
  };

  constructor(
    private contactsService: ContactsService,
    private router: Router
    ) {
    this.source = new LocalDataSource();
  }

  ngOnInit(): void {
    const now = new Date();
    const dayOfWeek = now.getDay();
    let startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - dayOfWeek)
    let startDate = startOfWeek.toISOString()
    this.contactsService.getContacts(startDate, now.toISOString())
      .subscribe(data => {
        this.source.load(data);
      });
  }

  moveToContactDetails(event) {
    console.log(event);
    this.router.navigateByUrl('/pages/contacts/' + event.data.id);
  }

}
