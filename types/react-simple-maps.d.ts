declare module "react-simple-maps" {
  import { ComponentType, SVGProps, ReactNode } from "react";

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: Record<string, unknown>;
    style?: React.CSSProperties;
    children?: ReactNode;
  }
  export const ComposableMap: ComponentType<ComposableMapProps>;

  export interface GeographiesProps {
    geography: string;
    children: (args: { geographies: Geography[] }) => ReactNode;
  }
  export const Geographies: ComponentType<GeographiesProps>;

  export interface Geography {
    rsmKey: string;
    [key: string]: unknown;
  }
  export interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: Geography;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
  }
  export const Geography: ComponentType<GeographyProps>;

  export interface MarkerProps {
    coordinates: [number, number];
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    children?: ReactNode;
    key?: string;
  }
  export const Marker: ComponentType<MarkerProps>;
}
