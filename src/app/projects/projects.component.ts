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
    { src: "../../assets/img/login.gif", tit: "TodosAndJokes", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper aliquam ipsum, non fermentum urna blandit quis. Nunc eu augue orci. Aliquam erat volutpat." },
    { src: "../../assets/img/pogaduszki.png", tit: "Pogaduszki", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper aliquam ipsum, non fermentum urna blandit quis. Nunc eu augue orci. Aliquam erat volutpat." }
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
    // this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    this.currentSlide = this.direction % this.slidesLength;
    if (this.currentSlide < 0) {
      this.currentSlide = -this.currentSlide;
    }
    // console.log('current slide: ' + this.currentSlide + ', modulo: ' + (this.currentSlide % this.slidesLength));
  }

  onNextClick() {
    this.direction += 1;
    // this.currentSlide = next === this.slides.length ? 0 : next;
    this.currentSlide = this.direction % this.slidesLength;
    if (this.currentSlide < 0) {
      this.currentSlide = -this.currentSlide;
    }
    // console.log('current slide: ' + this.currentSlide + ', modulo: ' + (this.currentSlide % this.slidesLength));
  }

}
