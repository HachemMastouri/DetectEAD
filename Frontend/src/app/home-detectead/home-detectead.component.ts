import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


export interface PacketData {
  no: number;
  time: string;
  source: string;
  destination: string;
  protocol: string;
  length: number;
}

const ELEMENT_DATA: PacketData[] = [
  { no: 1, time: '0.000780', source: '192.168.0.21', destination: '192.168.0.1', protocol: 'DNS', length: 84 },
  { no: 2, time: '0.055880', source: '192.168.0.1', destination: '192.168.0.21', protocol: 'DNS', length: 479 },
  { no: 3, time: '0.057690', source: '192.168.0.21', destination: '50.17.249.22', protocol: 'TCP', length: 74 },
  { no: 4, time: '0.154716', source: '50.17.249.22', destination: '192.168.0.21', protocol: 'TCP', length: 74 },
  { no: 5, time: '0.150000', source: '44.168.0.21', destination: '192.168.0.1', protocol: 'SMTP', length: 479 },
  { no: 6, time: '0.001800', source: '192.44.0.21', destination: '192.2.0.17', protocol: 'UDP', length: 84 },
  { no: 7, time: '0.089600', source: '192.168.40.21', destination: '197.128.0.1', protocol: 'DNS', length: 90 },
  { no: 8, time: '0.001700', source: '192.168.4.21', destination: '192.2.0.1', protocol: 'DNS', length: 74 },
  { no: 9, time: '0.159900', source: '122.178.0.44', destination: '192.168.2.1', protocol: 'DNS', length: 84 },
  { no: 10, time: '0.108900', source: '132.251.0.23', destination: '192.170.24.1', protocol: 'UDP', length: 64 },
];

@Component({
  selector: 'app-home-detectead',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule],
  templateUrl: './home-detectead.component.html',
  styleUrl: './home-detectead.component.css'
})
export class HomeDetecteadComponent {
  displayedColumns: string[] = ['no', 'time', 'source', 'destination', 'protocol', 'length'];
  dataSource = ELEMENT_DATA;
}
