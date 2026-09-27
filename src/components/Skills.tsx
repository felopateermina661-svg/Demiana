import React from 'react';

export const Skills: React.FC = () => {
  const skills = [
    { name: 'JavaScript', level: '85%', desc: 'البرمجة التفاعلية، التعامل مع DOM، الأسنكرونوس (Async/Await) و ES6+', icon: '⚡' },
    { name: 'Python (Basics)', level: '70%', desc: 'أساسيات بايثون، هياكل البيانات، المتغيرات والسكريبتات البرمجية', icon: '🐍' },
    { name: 'HTML5', level: '95%', desc: 'هيكلة صفحات الويب، Semantic Elements وتوافقية محركات البحث', icon: '🌐' },
    { name: 'CSS3', level: '90%', desc: 'تنسيق الواجهات، Flexbox, Grid، الأنيماشن والتصميم المتجاوب (Responsive)', icon: '🎨' },
  ];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.sectionTitle}>// المهارات التقنية (Tech Stack)</h2>
      <div style={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.skillCard}>
            <div style={styles.cardHeader}>
              <span style={styles.skillIcon}>{skill.icon}</span>
              <h3 style={styles.skillName}>{skill.name}</h3>
            </div>
            <p style={styles.skillDesc}>{skill.desc}</p>
            <div style={styles.progressBg}>
              <div style={{ ...styles.progressFill, width: skill.level }}></div>
            </div>
            <span style={styles.levelText}>{skill.level}</span>
          </div>
        ))}
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
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '2rem',
  },
  skillCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '2rem',
    backdropFilter: 'blur(10px)',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '1rem',
  },
  skillIcon: {
    fontSize: '1.8rem',
  },
  skillName: {
    fontSize: '1.3rem',
    margin: 0,
  },
  skillDesc: {
    color: '#aaa',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    minHeight: '45px',
  },
  progressBg: {
    width: '100%',
    height: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#00ffcc',
    borderRadius: '4px',
  },
  levelText: {
    display: 'block',
    textAlign: 'left',
    marginTop: '6px',
    fontSize: '0.8rem',
    color: '#00ffcc',
  },
};
