export type PortfolioCategory = "obras" | "loteamentos" | "rodovias" | "drones";

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

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
