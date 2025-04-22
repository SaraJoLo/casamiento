import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'irene-coke-wedding';

private route = inject(ActivatedRoute)

ngOnInit(): void {
  this.route.fragment.subscribe(fragment => {
    if (fragment){
      document.getElementById(fragment)?.scrollIntoView({behavior: 'smooth'
      })
    }
  })
}


}
