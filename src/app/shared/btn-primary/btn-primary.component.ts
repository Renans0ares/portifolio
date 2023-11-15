import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-primary',
  templateUrl: './btn-primary.component.html'
})
export class BtnPrimaryComponent {
  @Input('text') text: string = '';
}
