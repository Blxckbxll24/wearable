// src/views/Notifications.tsx
import React from 'react';
import { BottomNavBar } from '../components/BottomNavbar';

export const Notifications = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 pb-20 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Notificaciones</h1>
      <p>No hay notificaciones nuevas.</p>

      <div className="mt-auto">
        <BottomNavBar />
      </div>
    </div>
  );
};
