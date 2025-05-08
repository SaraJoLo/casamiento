import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RsvpEmailService {
private serviceId = environment.emailjs.serviceID;
private templateId = environment.emailjs.templateID;
private userId = environment.emailjs.publicKey;

  constructor() { 
    emailjs.init(this.userId)
  }

  sendEmail(formData:any){
    return emailjs.send(this.serviceId, this.templateId, formData)
  }
}
