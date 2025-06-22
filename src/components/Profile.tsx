
export const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-10 flex justify-center">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 transition-colors">
        <div className="flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Perfil"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md mb-6"
          />
          <h2 className="text-2xl font-bold mb-2">Información Básica</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">Nombre</label>
            <p className="font-semibold">Raúl Díaz Kauil</p>
          </div>
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">Fecha de Nacimiento</label>
            <p className="font-semibold">17/09/2004</p>
          </div>
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">Correo Electrónico</label>
            <p className="font-semibold">usario1@gmail.com</p>
          </div>
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">Género</label>
            <p className="font-semibold">Masculino</p>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-4">Contacto de Emergencia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">Correo Electrónico</label>
            <p className="font-semibold">emerg@gmail.com</p>
          </div>
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">Teléfono</label>
            <p className="font-semibold">9983675410</p>
          </div>
        </div>
      </div>
    </div>
  );
};
