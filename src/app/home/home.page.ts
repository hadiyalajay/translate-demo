import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  currentLanguage = 'en';
  constructor(private translateService: TranslateService) {}

  changeLan(event: any) {
    this.currentLanguage = event.detail.value;
    this.translateService.setDefaultLang(this.currentLanguage);
  }
}
