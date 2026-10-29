import { Directive, ElementRef, OnInit, OnDestroy, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealClass: string = 'reveal-fade-up';
  @Input() revealDelay: string = ''; // e.g. 'delay-100', 'delay-200'
  @Input() threshold: number = 0.15;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const nativeEl = this.el.nativeElement as HTMLElement;
    
    // Add base reveal type and delay classes if specified
    if (this.revealClass) {
      nativeEl.classList.add(this.revealClass);
    }
    if (this.revealDelay) {
      nativeEl.classList.add(this.revealDelay);
    }

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              nativeEl.classList.add('revealed');
              // Unobserve once revealed for performance
              this.observer?.unobserve(nativeEl);
            }
          });
        },
        {
          threshold: this.threshold,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      this.observer.observe(nativeEl);
    } else {
      // Fallback for older browsers
      nativeEl.classList.add('revealed');
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
