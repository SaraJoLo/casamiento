import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  private translate = inject(TranslateService)

  constructor() { 
    const webLanguage = this.translate.getBrowserLang() || "es";
    this.translate.setDefaultLang(webLanguage);
     this.translate.use(webLanguage)
  }

changeLanguage(lang: string){
  this.translate.use(lang)
}


getCurrentLanguage():string{
  return this.translate.currentLang
}

}
