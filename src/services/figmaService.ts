import axios from 'axios';
import { FigmaFile, FigmaComponent } from '../types/figma';

const FIGMA_API_URL = 'https://api.figma.com/v1';

export class FigmaService {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async getFile(fileKey: string): Promise<FigmaFile> {
    try {
      const response = await axios.get(`${FIGMA_API_URL}/files/${fileKey}`, {
        headers: {
          'X-Figma-Token': this.accessToken
        }
      });
      return this.transformFigmaResponse(response.data);
    } catch (error) {
      console.error('Error fetching Figma file:', error);
      throw error;
    }
  }

  private transformFigmaResponse(data: any): FigmaFile {
    // Здесь будет логика преобразования ответа от Figma API в нашу структуру
    return {
      name: data.name,
      lastModified: data.lastModified,
      components: this.extractComponents(data.document)
    };
  }

  private extractComponents(node: any): FigmaComponent[] {
    const components: FigmaComponent[] = [];
    
    if (node.type === 'COMPONENT') {
      components.push({
        id: node.id,
        name: node.name,
        description: node.description,
        styles: this.extractStyles(node),
        variants: this.extractVariants(node)
      });
    }

    if (node.children) {
      node.children.forEach((child: any) => {
        components.push(...this.extractComponents(child));
      });
    }

    return components;
  }

  private extractStyles(node: any): { [key: string]: string } {
    const styles: { [key: string]: string } = {};
    
    if (node.styles) {
      Object.entries(node.styles).forEach(([key, value]: [string, any]) => {
        styles[key] = value;
      });
    }

    return styles;
  }

  private extractVariants(node: any): { [key: string]: FigmaComponent } | undefined {
    if (!node.variants) return undefined;

    const variants: { [key: string]: FigmaComponent } = {};
    
    Object.entries(node.variants).forEach(([key, value]: [string, any]) => {
      variants[key] = {
        id: value.id,
        name: value.name,
        styles: this.extractStyles(value),
        variants: this.extractVariants(value)
      };
    });

    return variants;
  }

  async getPreviewImages(fileKey: string, nodeIds: string[]): Promise<{ [key: string]: string }> {
    try {
      const ids = nodeIds.join(',');
      const response = await axios.get(
        `https://api.figma.com/v1/images/${fileKey}?ids=${ids}&format=png`,
        {
          headers: {
            'X-Figma-Token': this.accessToken,
          },
        }
      );
      return response.data.images;
    } catch (error) {
      console.error('Error fetching preview images:', error);
      return {};
    }
  }
} 