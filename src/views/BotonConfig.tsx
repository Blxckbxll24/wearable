import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BottomNavBar } from '../components/BottomNavbar'

export const ButtonConfigDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [message, setMessage] = useState('');
    const [showVoiceSelect, setShowVoiceSelect] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState('');

    const voices = [
        'Voz 1 - Español',
        'Voz 2 - Inglés',
        'Voz 3 - Francés',
        'Voz 4 - Alemán',
    ];

    const toggleVoiceSelect = () => {
        setShowVoiceSelect((prev) => !prev);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 max-w-md mx-auto pb-20 flex flex-col">
            <h1 className="text-3xl font-bold mb-6">Configurar Botón #{id}</h1>

            <label className="block mb-2 font-semibold" htmlFor="message">
                Mensaje del botón
            </label>
            <input
                id="message"
                type="text"
                value={message}
                placeholder="Escribe el mensaje..."
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mb-6 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />

            <button
                onClick={toggleVoiceSelect}
                className="mb-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-colors"
            >
                Seleccionar voz
            </button>


            {showVoiceSelect && (
                <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                    <option value="" disabled>
                        Selecciona una voz
                    </option>
                    {voices.map((voice, idx) => (
                        <option key={idx} value={voice}>
                            {voice}
                        </option>
                    ))}
                </select>
            )}

            {/* Barra de navegación */}
            <div className="mt-auto">
                <BottomNavBar />
            </div>
        </div>
    );
};
