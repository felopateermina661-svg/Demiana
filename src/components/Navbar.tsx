import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>DEMIANIA MINA // PROTOCOL</div>
      <div style={styles.navLinks}>
        <a href="#about" style={styles.navItem}>نبذة عني</a>
        <a href="#skills" style={styles.navItem}>المهارات</a>
        <a href="#contact" style={styles.navItem}>التواصل</a>
        <Link to="/" style={styles.navIntroLink}>إعادة الانترو 🔄</Link>
      </div>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 3rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(10px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'rgba(11, 15, 25, 0.8)',
  },
  logo: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    color: '#00ffcc',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  navItem: {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '0.95rem',
  },
  navIntroLink: {
    color: '#00ffcc',
    textDecoration: 'none',
    border: '1px dashed #00ffcc',
    padding: '5px 12px',
    borderRadius: '6px',
    fontSize: '0.85rem',
  },
};
