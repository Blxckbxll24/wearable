import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './views/Login';
import { RegisterForm } from './views/Register';
import { PerfilConNavegacion } from './views/ProfileView';
import { Dashboard } from './views/Dashboard';
import { ButtonConfigPage } from './views/Buttons';
import { ButtonConfigDetail } from './views/BotonConfig';
import { Notifications } from './views/Notificaciones';
import { Home } from './views/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<PerfilConNavegacion />} />
        <Route path="/estadisticas" element={<Dashboard />} />
        <Route path="/botones" element={<ButtonConfigPage />} />
       <Route path="/config/:id" element={<ButtonConfigDetail />} />
       <Route path="/notificaciones" element={<Notifications />} />

        <Route path="/" element={<Home />} />
        {/* Aquí puedes agregar más rutas protegidas luego */}
      </Routes>
    </Router>
  );
}

export default App;
