import { Home, LayoutGrid, BarChart2, Bell, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const BottomNavBar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: <Home />, to: '/home' },
    { name: 'Botones', icon: <LayoutGrid />, to: '/botones' }, // redirige aquí
    { name: 'Estadísticas', icon: <BarChart2 />, to: '/estadisticas' },
    { name: 'Notificaciones', icon: <Bell />, to: '/notificaciones' },
    { name: 'Perfil', icon: <User />, to: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="flex justify-between px-4 py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              to={item.to}
              key={item.name}
              className={`flex flex-col items-center justify-center text-xs transition ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-blue-500'
              }`}
            >
              <div className="w-6 h-6">{item.icon}</div>
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
