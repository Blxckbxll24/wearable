import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavBar } from '../components/BottomNavbar'
import { Settings, Info } from 'lucide-react';

export const ButtonConfigPage = () => {
  const navigate = useNavigate();

  const buttons = [
    { id: 1, label: 'Botón azul', color: 'bg-blue-600', phrase: '¿Hola cómo estás?' },
    { id: 2, label: 'Botón naranja', color: 'bg-orange-500', phrase: 'Estoy bien' },
    { id: 3, label: 'Botón verde', color: 'bg-green-600', phrase: 'Adiós, cuídate.' },
    { id: 4, label: 'Botón amarillo', color: 'bg-yellow-400', phrase: 'Nos vemos pronto!' },
  ];

  const handleConfigClick = (id: number) => {
    navigate(`/config/${id}`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 max-w-md mx-auto pb-20">
      <h1 className="text-3xl font-bold mb-6">Botones disponibles</h1>

      <ul className="space-y-4">
        {buttons.map(({ id, label, color, phrase }) => (
          <li
            key={id}
            className="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow p-4"
          >
            <div
              className={`${color} flex items-center justify-center w-10 h-10 rounded-full text-white font-bold mr-4 flex-shrink-0`}
            >
              {id}
            </div>
            <div className="flex-1">
              <p className="font-semibold">{label}</p>
              <p className="text-gray-600 dark:text-gray-300 italic">“{phrase}”</p>
            </div>

            {/* Botón información */}
            <button
              type="button"
              aria-label="Información"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mr-4"
              onClick={() => alert(`Información: ${phrase}`)}
            >
              <Info className="w-6 h-6" />
            </button>

            {/* Botón configuración */}
            <button
              type="button"
              aria-label="Configurar"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              onClick={() => handleConfigClick(id)}
            >
              <Settings className="w-6 h-6" />
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-gray-700 dark:text-gray-400 font-medium">Categoría: saludos</p>

      {/* Barra de navegación */}
      <BottomNavBar />
    </div>
  );
};
