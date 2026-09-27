import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.aboutCard}>
        <h2 style={styles.sectionTitle}>// عن البروتوكول</h2>
        <p style={styles.aboutText}>
          تم تصميم هذا البروتوكول ليعكس شغفي بتطوير واجهات المستخدم التفاعلية الرائعة. أركز على كتابة كود نظيف، استجابة عالية للتصاميم، وتقديم تجارب مستخدم فريدة تجمع بين الأداء العالي والجمال البصري.
        </p>
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
    marginBottom: '1.5rem',
  },
  aboutCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    padding: '3rem',
  },
  aboutText: {
    fontSize: '1.1rem',
    color: '#ccc',
    lineHeight: '2',
  },
};
