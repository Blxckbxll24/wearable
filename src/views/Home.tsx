import React from 'react';
import { BottomNavBar } from '../components/BottomNavbar';

export const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 pb-20 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Inicio</h1>

      <section className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Estadísticas rápidas</h2>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow">
            <p className="text-lg font-bold">37</p>
            <p className="text-gray-600 dark:text-gray-300">Frases Dichas</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow">
            <p className="text-sm italic">“Quiero ir al baño”</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Frase más usada</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow">
            <p className="text-lg font-bold">10</p>
            <p className="text-gray-600 dark:text-gray-300">Palabras Dichas</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow">
            <p className="text-lg font-bold">37</p>
            <p className="text-gray-600 dark:text-gray-300">Frases Utilizables</p>
          </div>
        </div>
      </section>

      {/* Sección de botones */}
      <section className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Botones rápidos</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-600"></div>
            <span>Botón Azul</span>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500"></div>
            <span>Botón Naranja</span>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-green-600"></div>
            <span>Botón Verde</span>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
            <span>Botón Amarillo</span>
          </li>
        </ul>
      </section>

      <div className="mt-auto">
        <BottomNavBar />
      </div>
    </div>
  );
};
