import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-check-detectead',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule,FormsModule,NgIf],
  templateUrl: './check-detectead.component.html',
  styleUrl: './check-detectead.component.css'
})
export class CheckDetecteadComponent {
  inputIp: string = '';
  result: boolean | null = null;
  isLoading: boolean = false;
  isValid: boolean = true;

  // Fonction pour valider le format IP
  validateIp(ip: string): boolean {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
  }

  // Fonction pour simuler un traitement asynchrone
  checkIp(): void {
    this.isValid = this.validateIp(this.inputIp);
    if (!this.isValid) {
      this.result = null;
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    this.result = null;

    // Simuler un délai pour le traitement
    setTimeout(() => {
      this.result = Math.random() < 0.5; // Résultat aléatoire
      this.isLoading = false;
    }, 2000); // 2 secondes
  }
}
