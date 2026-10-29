import { Directive, ElementRef, Input, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appAnimatedCounter]',
  standalone: true
})
export class AnimatedCounterDirective implements OnInit, OnDestroy {
  @Input('appAnimatedCounter') targetValue: number = 0;
  @Input() prefix: string = '';
  @Input() suffix: string = '';
  @Input() duration: number = 1500; // ms

  private observer?: IntersectionObserver;
  private hasAnimated = false;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      this.updateText(this.targetValue);
      return;
    }

    const nativeEl = this.el.nativeElement as HTMLElement;

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasAnimated) {
              this.hasAnimated = true;
              this.animateCounter();
              this.observer?.unobserve(nativeEl);
            }
          });
        },
        { threshold: 0.2 }
      );

      this.observer.observe(nativeEl);
    } else {
      this.updateText(this.targetValue);
    }
  }

  private animateCounter() {
    const start = 0;
    const end = this.targetValue;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const currentValue = Math.floor(start + (end - start) * easedProgress);

      this.updateText(currentValue);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        this.updateText(end);
      }
    };

    requestAnimationFrame(update);
  }

  private updateText(value: number) {
    this.el.nativeElement.textContent = `${this.prefix}${value}${this.suffix}`;
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
