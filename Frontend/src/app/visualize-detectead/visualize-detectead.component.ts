import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-visualize-detectead',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule],
  templateUrl: './visualize-detectead.component.html',
  styleUrl: './visualize-detectead.component.css'
})
export class VisualizeDetecteadComponent implements OnInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createChart();
    }
  }

  createChart(): void {
    const ctx = document.getElementById('networkFlowChart') as HTMLCanvasElement;

    const data = {
      labels: ['44.x', '50.x', '122.x', '132.x', '192.168.x', '192.44.x', '192.2.x', '132.x', '192.170.x', '197.128.x'],
      datasets: [{
        label: 'Usablility Per Minute',
        data: [30, 40, 50, 45, 120, 60, 70, 65, 80, 90],
        borderColor: '#4A90E2',
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#ffacd6',
        tension: 0.3  
      }]
    };

    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Ip Range'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Usability Per Minute'
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#28428c'
            }
          }
        }
      }
    };

    new Chart(ctx, config);
  }

}
