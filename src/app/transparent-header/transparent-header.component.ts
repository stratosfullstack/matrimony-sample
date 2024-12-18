import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-transparent-header',
  templateUrl: './transparent-header.component.html',
  styleUrl: './transparent-header.component.css'
})
export class TransparentHeaderComponent {
    @Input() showRegisterButton: boolean = true;
}
