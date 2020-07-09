import { Component } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation,
    trigger('slideInOutFromRightToLeft', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)'
        }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('slideInOutFromLeftToRight', [
      transition(':enter', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'my-website';

  menuVisible = false;
  aboutMeVisible = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  expandMenu() {
    // let shadesEl = document.querySelector('.collapsible_menu');
    // shadesEl.classList.toggle('hide');
    this.menuVisible = !this.menuVisible;

  }

  expandAboutMe() {
    this.aboutMeVisible = !this.aboutMeVisible;
  }
}



