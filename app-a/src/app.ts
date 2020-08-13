import {Component, NgModule, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-a-cmp',
  template: `
  <h1>I am the application, updated</h1>
  <button (click)="lazyLoad()">Load it</button>
  <ng-container #vcr></ng-container>`,
})
export class AppACmp {
  constructor(private cfr: ComponentFactoryResolver) {}

  @ViewChild('vcr', {read: ViewContainerRef})
  vcr!: ViewContainerRef;

  lazyLoad(): void {
    console.log('dynamic import...');
    import('lib').then(mod => {
      console.log('...resolved');
      const factory = this.cfr.resolveComponentFactory(mod.LazyCmp);
      this.vcr.createComponent(factory);
    });
  }
}

@NgModule({
  bootstrap: [AppACmp],
  declarations: [AppACmp],
  imports: [BrowserModule],
})
export class AppAModule {}
