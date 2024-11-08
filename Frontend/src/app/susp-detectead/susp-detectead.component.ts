import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-susp-detectead',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule , FormsModule , CommonModule],
  templateUrl: './susp-detectead.component.html',
  styleUrl: './susp-detectead.component.css'
})
export class SuspDetecteadComponent {
  actions = [
    { label: '192.168.0.21', checked: false },
    { label: '44.168.0.21', checked: false },
    { label: '192.2.0.17', checked: false },
    { label: '122.178.0.44', checked: false },
    { label: '132.251.0.23', checked: false },
  ];

  checkActions() {
    this.actions = this.actions.filter(action => !action.checked);
    console.log('Remaining Actions:', this.actions);
  }
}
