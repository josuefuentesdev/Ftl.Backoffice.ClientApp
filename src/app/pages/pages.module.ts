import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ContactsModule } from './contacts/contacts.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CustomLogoutComponent } from './custom-logout/custom-logout.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ContactsModule,
    MiscellaneousModule
  ],
  declarations: [
    PagesComponent,
    CustomLogoutComponent,
  ],
})
export class PagesModule {
}
