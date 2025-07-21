// Interfaces centralisées

export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageRouteProps {
  pageRoute: string;
}
