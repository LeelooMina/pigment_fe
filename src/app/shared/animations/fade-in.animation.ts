import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
  // Define the transition from hidden to visible
  transition(':enter', [
    style({ opacity: 0 }),
    animate('.3s ease-out', style({ opacity: 1 })),
  ]),
]);
