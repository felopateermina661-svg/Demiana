import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header style={styles.heroSection}>
      <div style={styles.badge}>Status: Online & Ready</div>
      <h1 style={styles.heroTitle}>
        مرحباً بك في بروتوكول <br />
        <span style={styles.highlightName}>Demiania Mina</span>
      </h1>
      <p style={styles.heroSubText}>
        مطور واجهات ومحب لبرمجة وتصميم التطبيقات الحديثة باستخدام أحدث التقنيات والحلول التفاعلية.
      </p>
      <a href="#skills" style={styles.primaryActionBtn}>استكشف المهارات والتقنيات ↓</a>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  heroSection: {
    textAlign: 'center',
    padding: '6rem 2rem 4rem 2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-block',
    padding: '6px 16px',
    backgroundColor: 'rgba(0, 255, 204, 0.1)',
    color: '#00ffcc',
    borderRadius: '20px',
    fontSize: '0.85rem',
    marginBottom: '1.5rem',
    border: '1px solid rgba(0, 255, 204, 0.3)',
  },
  heroTitle: {
    fontSize: '3rem',
    lineHeight: '1.3',
    marginBottom: '1.5rem',
  },
  highlightName: {
    color: '#00ffcc',
    textShadow: '0 0 15px rgba(0, 255, 204, 0.3)',
  },
  heroSubText: {
    fontSize: '1.2rem',
    color: '#aaa',
    lineHeight: '1.8',
    marginBottom: '2.5rem',
  },
  primaryActionBtn: {
    display: 'inline-block',
    backgroundColor: '#00ffcc',
    color: '#0b0f19',
    padding: '12px 28px',
    borderRadius: '8px',
    fontWeight: 'bold',
    textDecoration: 'none',
    boxShadow: '0 0 20px rgba(0, 255, 204, 0.3)',
  },
};
