import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeToggle } from '../components/DarkModeToggle';
import { MobileOnlyModal } from '../components/modal'; // Ajusta la ruta según tu estructura

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Ingresando con: ${email}`);
    };

    const handleFacebookLogin = () => {
        alert('Iniciar sesión con Facebook');
    };

    const handleGoogleLogin = () => {
        alert('Iniciar sesión con Google');
    };

    return (
        <>
            <MobileOnlyModal />
            <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-0 transition-colors">
                {/* Aquí pones tu toggle */}
                <div className="w-full max-w-md flex justify-end mb-4">
                    <DarkModeToggle />
                </div>

                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 sm:p-10 transition-colors">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                        Inicia Sesión con tu cuenta
                    </h1>

                    <p className="text-center text-gray-600 dark:text-gray-300 mb-8 text-sm">
                        Ingresa tu correo y contraseña para poder iniciar
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Correo electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tucorreo@ejemplo.com"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Contraseña
                            </label>
                            <input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Tu contraseña"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                            />
                        </div>
                        <Link to={"/home"} className="block">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
                            >
                                Entrar
                            </button>
                        </Link>

                    </form>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300 dark:border-gray-600" />
                        <span className="mx-3 text-gray-400 dark:text-gray-500 text-sm">O</span>
                        <hr className="flex-grow border-gray-300 dark:border-gray-600" />
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={handleFacebookLogin}
                            className="w-full flex items-center justify-center gap-3 border border-blue-600 text-blue-600 rounded-xl py-3 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900 transition"
                        >
                            {/* ícono facebook */}
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M22.675 0h-21.35C.592 0 0 .59 0 1.318v21.364C0 23.412.592 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.765v2.314h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.324-.588 1.324-1.318V1.318C24 .59 23.408 0 22.675 0z" />
                            </svg>
                            Iniciar sesión con Facebook
                        </button>

                        <button
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                            {/* ícono google */}
                            <svg
                                className="w-5 h-5"
                                viewBox="0 0 533.5 544.3"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M533.5 278.4c0-18.5-1.6-36.2-4.6-53.4H272v101h147.1c-6.3 34.2-25.3 63.3-54.3 82.8v68h87.7c51.2-47.3 80.9-116.7 80.9-198.4z"
                                    fill="#4285f4"
                                />
                                <path
                                    d="M272 544.3c73.4 0 135-24.3 180-65.9l-87.7-68c-24.3 16.3-55.3 26-92.3 26-70.9 0-131-47.9-152.3-112.3h-90.4v70.8c44.9 88.6 137.7 149.4 242.7 149.4z"
                                    fill="#34a853"
                                />
                                <path
                                    d="M119.7 323.9c-11.5-34.4-11.5-71.5 0-105.9v-70.8h-90.4c-39 76.1-39 166.9 0 243l90.4-66.3z"
                                    fill="#fbbc04"
                                />
                                <path
                                    d="M272 107.7c39.9 0 75.8 13.7 104 40.6l78-78C402 24 344.6 0 272 0 166.9 0 74.1 60.8 29.3 149.4l90.4 70.8c21.3-64.4 81.4-112.3 152.3-112.3z"
                                    fill="#ea4335"
                                />
                            </svg>
                            Iniciar sesión con Google
                        </button>
                    </div>

                    <p className="mt-6 text-center text-gray-600 dark:text-gray-300 text-sm">
                        ¿No tienes cuenta?{' '}
                        <Link to="/register" className="text-blue-600 hover:underline font-semibold">
                            Regístrate aquí
                        </Link>
                    </p>
                </div>
            </div>
        </>

    );
};
