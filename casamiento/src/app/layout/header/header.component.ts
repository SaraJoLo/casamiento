import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageServiceService } from '../../services/language-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  private languageService = inject(LanguageServiceService)


changeLanguage(lang: string):void{
  this.languageService.changeLanguage(lang)
}

isHeaderVisible = true;
// header.component.ts
ngOnInit(): void {
  if (window.innerWidth <= 768) {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    document.addEventListener('touchmove', this.handleScroll, { passive: true }); // iOS fallback
  }
}

handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  this.isHeaderVisible = scrollTop > 100; // O el umbral que desees
};

// No olvides limpiar los eventos
ngOnDestroy(): void {
  window.removeEventListener('scroll', this.handleScroll);
  document.removeEventListener('touchmove', this.handleScroll);
}


}
