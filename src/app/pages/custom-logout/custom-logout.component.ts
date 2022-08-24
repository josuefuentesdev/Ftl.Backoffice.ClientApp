import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'ngx-custom-logout',
  templateUrl: './custom-logout.component.html',
  styleUrls: ['./custom-logout.component.scss']
})
export class CustomLogoutComponent implements OnInit {

  constructor(private msalService: MsalService,) { }

  ngOnInit(): void {
    this.msalService.logout();
  }

}
