export type PortfolioCategory =
  | "topografia"
  | "georreferenciamento"
  | "aerolevantamento"
  | "lidar"
  | "loteamentos"
  | "infraestrutura"
  | "rodovias"
  | "geoprocessamento"
  | "drones";

export type ServiceIcon =
  | "Map"
  | "Globe"
  | "Plane"
  | "ScanLine"
  | "LayoutGrid"
  | "Route"
  | "Mountain"
  | "Box"
  | "FileCheck"
  | "Layers";

export type EquipmentIcon =
  | "ScanLine"
  | "Plane"
  | "Satellite"
  | "Crosshair"
  | "Monitor"
  | "Truck";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
