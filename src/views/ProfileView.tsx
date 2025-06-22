
import { ProfilePage } from '../components/Profile'; // ajusta ruta si está en otra carpeta
import { BottomNavBar } from '../components/BottomNavbar'; // ajusta la ruta

export const PerfilConNavegacion = () => {
  return (
    <div className="relative pb-20">
      <ProfilePage />
      <BottomNavBar />
    </div>
  );
};
