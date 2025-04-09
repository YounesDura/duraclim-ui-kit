import React, { useState } from 'react';
import styles from './expandableSection.module.scss';

interface ExpandableSectionProps {
  title: string;
  summary?: React.ReactNode;
  isComplete?: boolean;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const ExpandableSection = ({
  title,
  summary,
  isComplete = false,
  children,
  defaultOpen = false
}: ExpandableSectionProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`${styles.expandableSection} ${open ? styles.open : ''}`}>
      <div className={styles.header} onClick={() => setOpen(!open)}>
        <div className={styles.left}>
          {isComplete && <span className={styles.check}>✓</span>}
          <span className={styles.title}>{title}</span>
        </div>
        {!open && summary && <div className={styles.summary}>{summary}</div>}
        <div className={styles.toggle}>{open ? '▲' : '▶'}</div>
      </div>

      {open && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default ExpandableSection;
