import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [NgIf, RouterLink],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
})
export class NavComponent {
  storService: any;

  constructor(public authService: AuthService) {}
}
