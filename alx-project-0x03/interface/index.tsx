// interface/index.tsx
// Ce fichier sert de point d'entrée pour les composants ou types de l'interface.

import { ReactNode } from "react";

export interface PageRouteProps {
  pageRoute: string;
}

export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

export interface LayoutProps {
  children: ReactNode;
}