import { Component } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'

@Component({
  selector: 'app-nav',
  imports: [MatListModule, MatSidenavModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
