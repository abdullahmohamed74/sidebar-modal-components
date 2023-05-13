import { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import useAppContext from '../hooks/useAppContext';
import logo from '../assets/logo.svg';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  const sidebarRef = useRef(null);

  // to close the sidebar when clicking anywhere on the screen outside the sidebar
  useEffect(() => {
    if (!sidebarRef.current) return;
    const clickHandler = (e) => {
      if (
        !e.target.closest('.toggle-sidebar') &&
        !sidebarRef.current.contains(e.target)
      ) {
        closeSidebar();
      }
    };
    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}
    >
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button onClick={closeSidebar} className="close-sidebar-btn">
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { id, url, icon, text } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
export default Sidebar;
