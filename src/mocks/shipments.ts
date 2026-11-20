export type ShipmentStatus =
  | "pending"
  | "in_transit"
  | "out_for_delivery"
  | "delivered"
  | "exception";

export interface TrackingEvent {
  id: string;
  timestamp: string;
  location: string;
  status: ShipmentStatus;
  description: string;
}

export interface Shipment {
  trackingCode: string;
  carrier: "Shipex Express" | "Shipex Cargo" | "Shipex Same-Day";
  status: ShipmentStatus;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  recipientName: string;
  weightKg: number;
  events: TrackingEvent[];
}

export const MOCK_SHIPMENT: Shipment[] = [
  {
    trackingCode: "SPX-984210-BR",
    carrier: "Shipex Express",
    status: "in_transit",
    origin: "São Paulo, SP",
    destination: "Rio de Janeiro, RJ",
    estimatedDelivery: "2026-11-22",
    recipientName: "Mariana Costa",
    weightKg: 2.4,
    events: [
      {
        id: "evt-103",
        timestamp: "2026-11-20T14:20:00-03:00",
        location: "Centro de Distribuição — Resende, RJ",
        status: "in_transit",
        description: "Objeto em transferência para a unidade de destino.",
      },
      {
        id: "evt-102",
        timestamp: "2026-11-20T06:15:00-03:00",
        location: "Hub Logístico — Guarulhos, SP",
        status: "in_transit",
        description: "Objeto expedido após triagem automatizada.",
      },
      {
        id: "evt-101",
        timestamp: "2026-11-19T18:05:00-03:00",
        location: "Agência Vila Olímpia — São Paulo, SP",
        status: "pending",
        description: "Objeto postado pelo remetente.",
      },
    ],
  },
  {
    trackingCode: "SPX-551904-BR",
    carrier: "Shipex Same-Day",
    status: "out_for_delivery",
    origin: "Niterói, RJ",
    destination: "Rio de Janeiro, RJ",
    estimatedDelivery: "2026-11-20",
    recipientName: "Carlos Eduardo Lima",
    weightKg: 0.8,
    events: [
      {
        id: "evt-203",
        timestamp: "2026-11-20T09:10:00-03:00",
        location: "Base Operacional Botafogo — Rio de Janeiro, RJ",
        status: "out_for_delivery",
        description: "Objeto saiu para entrega ao destinatário.",
      },
      {
        id: "evt-202",
        timestamp: "2026-11-20T07:40:00-03:00",
        location: "Base Operacional Botafogo — Rio de Janeiro, RJ",
        status: "in_transit",
        description: "Objeto recebido na unidade de distribuição local.",
      },
      {
        id: "evt-201",
        timestamp: "2026-11-20T06:00:00-03:00",
        location: "Hub Icaraí — Niterói, RJ",
        status: "pending",
        description: "Coleta expressa concluída.",
      },
    ],
  },
  {
    trackingCode: "SPX-330187-BR",
    carrier: "Shipex Cargo",
    status: "delivered",
    origin: "Curitiba, PR",
    destination: "Belo Horizonte, MG",
    estimatedDelivery: "2026-11-18",
    recipientName: "TechNova Soluções Ltda.",
    weightKg: 14.5,
    events: [
      {
        id: "evt-303",
        timestamp: "2026-11-18T16:42:00-03:00",
        location: "Belo Horizonte, MG",
        status: "delivered",
        description: "Objeto entregue ao destinatário (recebido por Portaria).",
      },
      {
        id: "evt-302",
        timestamp: "2026-11-18T08:30:00-03:00",
        location: "Terminal Contagem — Contagem, MG",
        status: "out_for_delivery",
        description: "Objeto saiu para entrega ao destinatário.",
      },
      {
        id: "evt-301",
        timestamp: "2026-11-16T11:15:00-03:00",
        location: "Centro Logístico CIC — Curitiba, PR",
        status: "pending",
        description: "Objeto postado pelo remetente.",
      },
    ],
  },
  {
    trackingCode: "SPX-774012-BR",
    carrier: "Shipex Express",
    status: "exception",
    origin: "Campinas, SP",
    destination: "Salvador, BA",
    estimatedDelivery: "2026-11-21",
    recipientName: "Fernanda Alves",
    weightKg: 3.1,
    events: [
      {
        id: "evt-402",
        timestamp: "2026-11-20T11:05:00-03:00",
        location: "Unidade Pituba — Salvador, BA",
        status: "exception",
        description:
          "Tentativa de entrega não efetuada — endereço incompleto. Aguardando atualização.",
      },
      {
        id: "evt-401",
        timestamp: "2026-11-18T15:50:00-03:00",
        location: "Hub Viracopos — Campinas, SP",
        status: "pending",
        description: "Objeto postado pelo remetente.",
      },
    ],
  },
];
