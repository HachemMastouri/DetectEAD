import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ai-info-detctead',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule],
  templateUrl: './ai-info-detctead.component.html',
  styleUrl: './ai-info-detctead.component.css'
})
export class AiInfoDetcteadComponent {

}
