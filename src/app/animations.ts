import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* => *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                })
            ], { optional: true }),
            query(':enter', [
                style({ opacity: 0 })
            ], { optional: true }),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('500ms ease-out', style({ opacity: 0 }))
                ], { optional: true }),
                query(':enter', [
                    animate('500ms ease-out', style({ opacity: 1 }))
                ], { optional: true })
            ]),
            query(':enter', animateChild(), { optional: true }),
        ]),
    ]);
