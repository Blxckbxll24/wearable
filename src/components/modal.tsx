import React, { useEffect, useState } from 'react';

export const MobileOnlyModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth > 768) { // umbral para móvil (puedes ajustar)
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-sm mx-4 text-center shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          Por favor, usa un dispositivo móvil
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Esta aplicación está optimizada para dispositivos móviles. Por favor, accede desde un teléfono o tableta.
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};
