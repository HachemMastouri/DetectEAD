import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-database-detectead',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule,NgFor],
  templateUrl: './database-detectead.component.html',
  styleUrl: './database-detectead.component.css'
})
export class DatabaseDetecteadComponent {
  suspiciousIps: string[] = [
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
    '192.168.0.21',
    '192.2.0.1',
    '192.2.0.17',
    '132.251.0.23',
  ];
}
