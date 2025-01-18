from scapy.all import sniff

def packet_sniffing(packet):
    print(packet.show())

sniff(prn=packet_sniffing, count=100)