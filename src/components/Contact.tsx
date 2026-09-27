import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.sectionTitle}>// اتصال وإشارة التواصل</h2>
      <div style={styles.contactBox}>
        <p style={{ color: '#aaa', marginBottom: '1.5rem' }}>
          هل لديك مشروع أو فكرة تريد تحويلها للواقع؟ تواصل معي مباشرة:
        </p>
        <a href="mailto:demiania.mina@example.com" style={styles.contactBtn}>
          إرسال رسالة بريدية 📧
        </a>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: '4rem 2rem',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  sectionTitle: {
    color: '#00ffcc',
    fontSize: '1.6rem',
    marginBottom: '2.5rem',
  },
  contactBox: {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: 'rgba(0, 255, 204, 0.02)',
    borderRadius: '20px',
    border: '1px dashed rgba(0, 255, 204, 0.3)',
  },
  contactBtn: {
    display: 'inline-block',
    backgroundColor: 'transparent',
    color: '#00ffcc',
    border: '2px solid #00ffcc',
    padding: '12px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
