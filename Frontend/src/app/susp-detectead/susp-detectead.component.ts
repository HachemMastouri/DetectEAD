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
    { label: '192.2.0.1', checked: false },
    { label: '192.2.0.17', checked: false },
    { label: '132.251.0.23', checked: false },
  ];

  private ipPool = [
    '192.168.40.21',
    '197.128.0.1',
    '192.168.4.21',
    '192.2.0.1',
    '50.17.249.22',
    '192.170.24.1',
    '192.44.0.21',
    '44.168.0.100',
    '122.178.0.55',
    '132.251.0.66',
    '44.168.0.21',
    '192.2.0.17',
    '122.178.0.44',
    '132.251.0.23',
  ];

  addIp() {
    const randomIp = this.ipPool[Math.floor(Math.random() * this.ipPool.length)];

    const exists = this.actions.some(action => action.label === randomIp);

    if (!exists) {
      this.actions.push({ label: randomIp, checked: false });
      console.log('IP added:', randomIp);
    } else {
      console.log('IP already exists, skipping:', randomIp);
    }
  }

  checkActions() {
    this.actions = this.actions.filter(action => !action.checked);
    console.log('Remaining Actions:', this.actions);
  }
}
