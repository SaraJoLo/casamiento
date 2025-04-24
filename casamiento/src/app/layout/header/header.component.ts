import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    const translateService = inject(TranslateService);
    const defaultLang = 'en';
    translateService.setDefaultLang(defaultLang);
    console.log(`HeaderComponent initialized with default language: ${defaultLang}`);
  }

}
