import { IpServiceService } from "./ip-service.service";

export class Packet {
  no: number; 
  ipSource: IpServiceService; 
  ipDestination: IpServiceService; 
  protocol: string; 
  length: number; 
  isSuspicious: boolean; 
  timestamp: Date; 

  constructor(
    no: number,
    ipSource: IpServiceService,
    ipDestination: IpServiceService,
    protocol: string,
    length: number,
    isSuspicious: boolean,
    timestamp: Date
  ) {
    this.no = no;
    this.ipSource = ipSource;
    this.ipDestination = ipDestination;
    this.protocol = protocol;
    this.length = length;
    this.isSuspicious = isSuspicious;
    this.timestamp = timestamp;
  }

}