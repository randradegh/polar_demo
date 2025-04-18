import { useState } from 'react'
import ContentGenerator from './components/ContentGenerator'
import ExportButtons from './components/ExportButtons'
import { generateContent } from './services/openai'

interface GeneratedContentState {
  content: string;
  filename: string;
}

function App() {
  const [generatedContent, setGeneratedContent] = useState<GeneratedContentState>({ content: '', filename: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleGenerate = async (keyword: string, length: string) => {
    try {
      setIsLoading(true);
      setError('');
      const result = await generateContent(keyword, length);
      setGeneratedContent(result);
    } catch (err) {
      setError('Error al generar el contenido. Por favor, verifica tu API key y vuelve a intentar.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      {/* Header centrado */}
      <header className="bg-blue-900 shadow-sm">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-teal-600 mb-4">Polar Content</h1>
            <div className="space-y-1 text-3xl text-gray-100">
              <p className="font-bold text-gray-100">Demo Académico</p>
              <p className="font-medium text-gray-100">Sistemas de Información Gerencial</p>
              <p className="font-medium text-gray-100">Maestría en Alta Dirección</p>
              <p className="font-medium text-gray-100">Facultad de Química - UNAM</p>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda - Generador */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[600px] flex flex-col">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <ContentGenerator onGenerate={handleGenerate} />
              </div>
            </div>

            {isLoading && (
              <div className="mt-6 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-500 border-t-transparent"></div>
                <p className="mt-4 text-lg text-gray-600">Generando contenido...</p>
              </div>
            )}
            
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
                {error}
              </div>
            )}
            
            {generatedContent.content && !isLoading && (
              <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <pre className="text-lg text-gray-700 whitespace-pre-wrap">{generatedContent.content}</pre>
                <div className="mt-4">
                  <ExportButtons content={generatedContent.content} filename={generatedContent.filename} />
                </div>
              </div>
            )}
          </div>

          {/* Columna derecha - Descripción */}
          <div className="bg-white rounded-lg shadow-lg p-8 h-[700px] overflow-y-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Cómo funciona?</h2>
            <div className="space-y-6 text-xl text-gray-600">
              <p>
                Este generador de contenido utiliza inteligencia artificial para crear 
                artículos de alta calidad a partir de palabras clave. El proceso es simple:
              </p>
              <ol className="list-decimal list-inside space-y-4 text-2xl">
                <li className="pl-2">Ingresa una palabra clave o descripción del tema sobre el que deseas generar contenido</li>
                <li className="pl-2">Selecciona la longitud deseada para tu artículo</li>
                <li className="pl-2">Haz clic en "Crear Nuevo Artículo" y espera mientras nuestro sistema genera el contenido</li>
                <li className="pl-2">Obtén un artículo único y bien estructurado listo para usar</li>
                <li className="pl-2">Exporta el contenido en el formato que prefieras: PDF, Markdown o Word</li>
              </ol>
              <p>
                El contenido generado es único, relevante y optimizado para SEO, 
                perfecto para blogs, sitios web y marketing de contenidos.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-gray-100 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">
            Programado por Roberto Andrade F. con el apoyo de Cursor AI. 
            Idea original de{' '}
            <a 
              href="https://www.articleforge.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 underline"
            >
              articleforge.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App 