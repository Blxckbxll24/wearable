import React from 'react';
import { BottomNavBar } from '../components/BottomNavbar';

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pb-20"> {/* espacio para navbar */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-blue-100 dark:bg-blue-800 p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-1">Frases Dichas</h2>
            <p className="text-3xl font-bold">37</p>
          </div>
          <div className="bg-green-100 dark:bg-green-800 p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-1">Frase más usada</h2>
            <p className="text-xl font-medium">"Quiero ir al baño"</p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-800 p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-1">Frases Utilizables</h2>
            <p className="text-3xl font-bold">10</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-800 p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-1">Palabras Dichas</h2>
            <p className="text-3xl font-bold">37</p>
          </div>
        </div>

        {/* Historial */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-lg font-bold mb-4">Historial</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
            <li>Papá tengo hambre</li>
            <li>Quiero ir al baño</li>
            <li>Vamos a jugar</li>
            <li>Tengo sed</li>
            <li>Quiero ir al baño</li>
          </ol>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};
