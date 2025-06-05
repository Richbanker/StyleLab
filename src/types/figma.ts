export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  styles?: {
    [key: string]: string;
  };
}

export interface FigmaComponent {
  id: string;
  name: string;
  description?: string;
  styles: {
    [key: string]: string;
  };
  variants?: {
    [key: string]: FigmaComponent;
  };
}

export interface FigmaFile {
  name: string;
  lastModified: string;
  components: FigmaComponent[];
} 