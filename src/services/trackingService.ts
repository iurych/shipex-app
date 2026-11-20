import { MOCK_SHIPMENTS, type Shipment } from "@/mocks/shipments";

const SIMULATED_DELAY_MS = 450;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getShipmentByCode(
  rawCode: string,
): Promise<Shipment | null> {
  await sleep(SIMULATED_DELAY_MS);

  const normalizedCode = rawCode.trim().toUpperCase();
  if (!normalizedCode) {
    return null;
  }

  const found = MOCK_SHIPMENTS.find(
    (shipment) => shipment.trackingCode.toUpperCase() === normalizedCode,
  );

  return found ?? null;
}

export async function listRecentShipments(): Promise<Shipment[]> {
  await sleep(SIMULATED_DELAY_MS);
  return MOCK_SHIPMENTS;
}
