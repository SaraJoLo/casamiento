import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class RsvpEmailService {
private serviceId = 'service_yl271ph';
private templateId = 'template_rsvp_boda';
private userId = 'Wovzm0AAoLwjrpfBO';

  constructor() { 
    emailjs.init(this.userId)
  }

  sendEmail(formData:any){
    return emailjs.send(this.serviceId, this.templateId, formData)
  }
}
