import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class RsvpEmailService {
private serviceId = 'service_w677deq';
private templateId = 'template_ki6dsi2';

private userId = 'KIHWqmyPfzSeCPwmZ';

  constructor() { 
    emailjs.init(this.userId)
  }

  sendEmail(formData:any){
    return emailjs.send(this.serviceId, this.templateId, formData)

  }
}
