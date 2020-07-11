import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, group, animateChild } from '@angular/animations';
import { MAT_SLIDER_VALUE_ACCESSOR } from '@angular/material/slider';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', group([
        query(':enter', [
          style({
            transform: 'translateX(200%)',
            position: 'absolute',
          }),
          animate('1s ease-out', style({
          }))
        ]),
        query(':leave', [
          animate('1s ease-out', style({
            position: 'absolute',
            transform: 'translateX(-200%)'
          }))
        ])
      ])),
      transition(':decrement', group([
        style({
          position: 'relative'
        }),
        query(':enter', [
          style({
            transform: 'translateX(-200%)',
            position: 'absolute',
          }),
          animate('1s ease-out', style({
          }))
        ]),
        query(':leave', [
          animate('1s ease-out', style({
            position: 'absolute',
            transform: 'translateX(200%)'
          }))
        ])
      ]))
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  public slides = [
    { src: "../../assets/img/login.gif", tit: "TodosAndJokes", des: "Project of website that allows, after logging in, add todos and read jokes. The whole project has been clearly divided into frontend (Angular) and backend (Spring). Authorization process uses JWT to confirm user's identity.", git: "https://github.com/mateuszgrzelak/todosandjokes" },
    { src: "../../assets/img/pogaduszki.png", tit: "Pogaduszki", des: "Messenger project where communication takes place using RabbitMQ. The visual layer was created using the Thymeleaf template engine. The project also includes registration and authorization using basic authorization.", git: "https://github.com/mateuszgrzelak/pogaduszki" }
  ]

  slidesLength = this.slides.length;
  direction = 0;
  currentSlide = this.direction % this.slidesLength;


  constructor() { }

  ngOnInit(): void {
    this.preloadImages();
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

  onPreviousClick() {
    this.direction -= 1;
    this.currentSlide = this.direction % this.slidesLength;
    if (this.currentSlide < 0) {
      this.currentSlide = -this.currentSlide;
    }
  }

  onNextClick() {
    this.direction += 1;
    this.currentSlide = this.direction % this.slidesLength;
    if (this.currentSlide < 0) {
      this.currentSlide = -this.currentSlide;
    }
  }


}
