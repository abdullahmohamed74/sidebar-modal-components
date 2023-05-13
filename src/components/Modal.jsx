import { FaTimes } from 'react-icons/fa';
import useAppContext from '../hooks/useAppContext';

function Modal() {
  const { isModalOpen, closeModal } = useAppContext();

  return (
    <div
      onClick={closeModal}
      //   toggle "show-modal" class based on "isModalOpen" state
      className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}
    >
      <div className="modal-constainer">
        <h2>modal content</h2>
        <button onClick={closeModal} className="close-modal">
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
export default Modal;
