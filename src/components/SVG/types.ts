export interface SVGProps {
  width: number;
  height: number;
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
  onKeyDown?: (e: React.KeyboardEvent<SVGSVGElement>) => void;
  ariaLabel: string;
  dataTestId?: string;
}
