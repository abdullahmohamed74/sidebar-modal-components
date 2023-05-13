import { FaBars } from 'react-icons/fa';
import useAppContext from '../hooks/useAppContext';

function Home() {
  const { openSidebar, openModal } = useAppContext();

  return (
    <main>
      <button onClick={openSidebar} className="toggle-sidebar">
        <FaBars className='svg-icon' />
      </button>

      <button onClick={openModal} className="toggle-modal btn">
        show modal
      </button>
    </main>
  );
}
export default Home;
