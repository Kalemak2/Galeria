import './App.css';
import Gallery from './Gallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Moja Galeria React
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          Galeria zdjęć
        </h2>
      </div>
      <div className="w-full max-w-6xl">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
