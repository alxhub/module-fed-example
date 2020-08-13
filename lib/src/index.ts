import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'lazy-cmp',
  template: '<h2>I was loaded on demand!</h2>',
})
export class LazyCmp {}

@NgModule({
  declarations: [LazyCmp],
})
export class LazyModule {}