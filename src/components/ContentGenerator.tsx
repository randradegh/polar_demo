import { useState } from 'react';

interface ContentGeneratorProps {
  onGenerate: (keyword: string, length: string) => Promise<void>;
}

const ContentGenerator = ({ onGenerate }: ContentGeneratorProps) => {
  const [keyword, setKeyword] = useState('');
  const [length, setLength] = useState('short');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onGenerate(keyword, length);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Generador de Contenido</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-3">
            Palabra clave o descripción
          </label>
          <div className="flex">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="flex-1 text-lg border-gray-300 border rounded-l-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ingresa tu palabra clave"
              required
            />
            <select 
              className="text-lg border-l-0 border-gray-300 border rounded-r-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="es">Español</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-3">
            Longitud del Artículo
          </label>
          <select
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full text-lg border-gray-300 border rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="short">Corto (~250 palabras)</option>
            <option value="medium">Medio (~500 palabras)</option>
            <option value="long">Largo (~1000 palabras)</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full text-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Crear Nuevo Artículo
        </button>
      </form>

      <div className="mt-12 grid grid-cols-4 gap-6 text-center border-t border-gray-200 pt-8">
        <Step number="01" text="Enter Keyword" />
        <Step number="02" text="Choose Length" />
        <Step number="03" text="Wait 60 Seconds" />
        <Step number="04" text="Get Your Article" />
      </div>
    </div>
  );
};

const Step = ({ number, text }: { number: string; text: string }) => (
  <div className="text-gray-600">
    <div className="text-xl font-bold mb-2">{number}</div>
    <div className="text-sm">{text}</div>
  </div>
);

export default ContentGenerator; 