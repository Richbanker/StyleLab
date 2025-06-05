import React, { useState } from 'react';
import { FigmaComponent } from '../types/figma';

interface ComponentEditorProps {
  component: FigmaComponent;
  onStyleChange: (componentId: string, styles: { [key: string]: string }) => void;
  previewUrl?: string;
}

export const ComponentEditor: React.FC<ComponentEditorProps> = ({ component, onStyleChange, previewUrl }) => {
  const [styles, setStyles] = useState(component.styles);

  const handleStyleChange = (key: string, value: string) => {
    const newStyles = { ...styles, [key]: value };
    setStyles(newStyles);
    onStyleChange(component.id, newStyles);
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">{component.name}</h3>
      {previewUrl && (
        <img src={previewUrl} alt={component.name} className="mb-4 rounded shadow" />
      )}
      <div className="space-y-4">
        {Object.entries(styles).map(([key, value]) => (
          <div key={key} className="flex items-center space-x-2">
            <label className="w-1/3 text-sm font-medium">{key}</label>
            <input
              type="text"
              value={value}
              onChange={(e) => handleStyleChange(key, e.target.value)}
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>

      {component.description && (
        <p className="mt-4 text-sm text-gray-600">{component.description}</p>
      )}
    </div>
  );
}; 