import React, { useState, useEffect } from 'react';
import { FigmaService } from './services/figmaService';
import { ComponentEditor } from './components/ComponentEditor';
import { ThemeToggle } from './components/ThemeToggle';
import { FigmaComponent } from './types/figma';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [components, setComponents] = useState<FigmaComponent[]>([]);
  const [accessToken, setAccessToken] = useState('');
  const [fileKey, setFileKey] = useState('');
  const [previews, setPreviews] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Применяем темную тему к body
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleImport = async () => {
    if (!accessToken || !fileKey) {
      alert('Пожалуйста, введите токен доступа и ключ файла Figma');
      return;
    }

    try {
      const figmaService = new FigmaService(accessToken);
      const file = await figmaService.getFile(fileKey);
      setComponents(file.components);

      // Получаем превью для всех компонентов
      const nodeIds = file.components.map((c) => c.id);
      if (nodeIds.length > 0) {
        const images = await figmaService.getPreviewImages(fileKey, nodeIds);
        setPreviews(images);
      } else {
        setPreviews({});
      }
    } catch (error) {
      console.error('Ошибка при импорте:', error);
      alert('Ошибка при импорте файла Figma');
    }
  };

  const handleStyleChange = (componentId: string, styles: { [key: string]: string }) => {
    setComponents(prevComponents =>
      prevComponents.map(component =>
        component.id === componentId
          ? { ...component, styles }
          : component
      )
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">StyleLab</h1>

        <div className="mb-8 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Figma Access Token</label>
            <input
              type="password"
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
              placeholder="Введите токен доступа Figma"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Figma File Key</label>
            <input
              type="text"
              value={fileKey}
              onChange={(e) => setFileKey(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
              placeholder="Введите ключ файла Figma"
            />
          </div>

          <button
            onClick={handleImport}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Импортировать компоненты
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map(component => (
            <ComponentEditor
              key={component.id}
              component={component}
              onStyleChange={handleStyleChange}
              previewUrl={previews[component.id]}
            />
          ))}
        </div>
      </div>

      <ThemeToggle
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode(!isDarkMode)}
      />
    </div>
  );
}

export default App;
