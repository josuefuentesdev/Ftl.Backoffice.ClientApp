import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService, GetOneContactResponseDto } from '../../../../libs/api-client';

@Component({
  selector: 'ngx-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  id: string;
  contact: GetOneContactResponseDto;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.contactsService.getContactById(Number(this.id))
      .subscribe((v) => {
        this.contact = v;
        console.log(v);
      }
    );



  }

}
