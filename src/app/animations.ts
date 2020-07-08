import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                })
            ]),
            query(':enter', [
                style({ opacity: 0 })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('500ms ease-out', style({ opacity: 0 }))
                ]),
                query(':enter', [
                    animate('500ms ease-out', style({ opacity: 1 }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
    ]);
