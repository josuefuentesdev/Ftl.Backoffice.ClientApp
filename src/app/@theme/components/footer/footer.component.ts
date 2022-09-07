import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b><a href="https://josuefuentesdev.com" target="_blank">Josue Fuentes</a></b> {{ currentYear }}
    </span>
    <div class="socials">
      <a href="https://github.com/josuefuentesdev" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/josuefuentesdev" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://twitter.com/josuefuentesdev" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
  currentYear: number=new Date().getFullYear();
}
