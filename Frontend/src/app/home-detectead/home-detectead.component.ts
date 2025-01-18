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

const ELEMENT_DATA1: PacketData[] = [
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

const ELEMENT_DATA2: PacketData[] = [
  { no: 1, time: '0.000780', source: '192.168.0.121', destination: '192.168.0.1', protocol: 'DNS', length: 84 },
  { no: 2, time: '0.055880', source: '192.168.0.10', destination: '192.168.0.21', protocol: 'DNS', length: 479 },
  { no: 3, time: '0.057690', source: '192.168.0.210', destination: '50.17.249.22', protocol: 'TCP', length: 74 },
  { no: 4, time: '0.154716', source: '50.17.249.22', destination: '192.168.0.21', protocol: 'TCP', length: 74 },
  { no: 5, time: '0.150000', source: '44.168.0.21', destination: '192.168.0.1', protocol: 'SMTP', length: 479 },
  { no: 6, time: '0.001800', source: '192.44.0.21', destination: '192.2.0.17', protocol: 'UDP', length: 84 },
  { no: 7, time: '0.089600', source: '192.168.40.21', destination: '197.128.0.1', protocol: 'DNS', length: 90 },
  { no: 8, time: '0.001700', source: '192.168.4.21', destination: '192.2.0.1', protocol: 'DNS', length: 74 },
  { no: 9, time: '0.159900', source: '122.178.0.44', destination: '192.168.2.1', protocol: 'DNS', length: 84 },
  { no: 10, time: '0.108900', source: '132.251.0.23', destination: '192.170.24.1', protocol: 'UDP', length: 64 },
];

const ELEMENT_DATA3: PacketData[] = [
  { no: 1, time: '0.200800', source: '140.70.0.1', destination: '10.12.0.2', protocol: 'ICMP', length: 32 },
  { no: 2, time: '0.300700', source: '177.0.0.2', destination: '10.15.0.1', protocol: 'ICMP', length: 32 },
  { no: 3, time: '0.400700', source: '172.16.0.1', destination: '172.16.0.2', protocol: 'TCP', length: 64 },
  { no: 4, time: '0.502000', source: '172.16.0.2', destination: '172.16.0.1', protocol: 'TCP', length: 64 },
  { no: 5, time: '0.100000', source: '8.8.8.8', destination: '8.8.4.4', protocol: 'DNS', length: 128 },
  { no: 6, time: '0.890000', source: '192.168.1.1', destination: '192.168.1.2', protocol: 'ARP', length: 28 },
  { no: 7, time: '0.500000', source: '192.168.1.2', destination: '192.168.1.1', protocol: 'ARP', length: 28 },
  { no: 8, time: '0.700000', source: '203.0.113.1', destination: '203.0.113.2', protocol: 'TCP', length: 74 },
  { no: 9, time: '1.120000', source: '203.0.113.2', destination: '203.0.113.1', protocol: 'TCP', length: 74 },
  { no: 10, time: '1.102300', source: '198.51.100.1', destination: '198.51.100.2', protocol: 'UDP', length: 512 },
];

const ELEMENT_DATA4: PacketData[] = [
  { no: 1, time: '1.200000', source: '105.10.1.1', destination: '170.1.11.2', protocol: 'HTTP', length: 1024 },
  { no: 2, time: '1.300000', source: '120.1.1.2', destination: '110.1.111.33', protocol: 'HTTP', length: 1024 },
  { no: 3, time: '1.400000', source: '172.31.0.1', destination: '172.31.0.2', protocol: 'FTP', length: 128 },
  { no: 4, time: '0.890000', source: '192.168.1.1', destination: '192.168.1.2', protocol: 'ARP', length: 28 },
  { no: 5, time: '0.500000', source: '192.168.1.2', destination: '192.168.1.1', protocol: 'ARP', length: 28 },
  { no: 6, time: '1.500000', source: '172.31.0.2', destination: '172.31.0.1', protocol: 'FTP', length: 128 },
  { no: 7, time: '1.600000', source: '1.1.1.1', destination: '1.0.0.1', protocol: 'DNS', length: 256 },
  { no: 8, time: '0.700000', source: '203.0.113.1', destination: '203.0.113.2', protocol: 'TCP', length: 80 },
  { no: 9, time: '1.120000', source: '203.0.113.2', destination: '203.0.113.1', protocol: 'TCP', length: 80 },
  { no: 10, time: '1.102300', source: '198.51.100.1', destination: '198.51.100.2', protocol: 'UDP', length: 512 },
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
  dataSource: PacketData[] = [];
  private dataSets: PacketData[][] = [ELEMENT_DATA1, ELEMENT_DATA2, ELEMENT_DATA3, ELEMENT_DATA4];

  constructor() {
    this.selectSet();
  }

  selectSet(): void {
    const randomIndex = Math.floor(Math.random() * this.dataSets.length);
    this.dataSource = this.dataSets[randomIndex];
  }

  private actions = [
    { label: '192.168.0.21', checked: false },
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

}
