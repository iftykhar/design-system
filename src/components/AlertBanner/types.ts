export type AlertType = 'success' | 'error' | 'info' | 'warning';

export interface AlertBannerProps {
  type?: AlertType;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}
