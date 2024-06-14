import { useState } from "react";

import { SIDEBAR_ACTION_ITEMS } from "utils/constants";

import styles from "./styles.module.css";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${isExpanded && styles.expanded}`}>
      <div className={styles.menuIconContainer}>
        <div
          className={`material-symbols-outlined cursor-pointer ${styles.menuIcon}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          menu
        </div>
      </div>
      <div className={`cursor-pointer ${styles.newChat}`}>
        <div className="material-symbols-outlined">add</div>
        {isExpanded && <div className={styles.newChatText}>New chat</div>}
      </div>

      <div className={styles.bottomContainer}>
        {SIDEBAR_ACTION_ITEMS.map(({ icon, text }, index) => (
          <div className={styles.actionItem} key={index}>
            <div
              className={`material-symbols-outlined ${styles.actionItemIcon}`}
            >
              {icon}
            </div>
            {isExpanded && <div className={styles.actionText}>{text}</div>}
          </div>
        ))}
        {isExpanded && (
          <div className={styles.geminiAdvancedAndLocation}>
            <div className={styles.geminiAdvanced}>
              <img
                src="https://www.gstatic.com/lamda/images/gemini_sparkle_red_4ed1cbfcbc6c9e84c31b987da73fc4168aec8445.svg"
                alt="upgrade-gemini"
                height="16px"
                width="16px"
              />
              <div className={styles.geminiAdvancedText}>
                Try Gemini Advanced
              </div>
            </div>
            <div className={styles.locationContainer}>
              <div className={`material-icons  ${styles.locationIcon}`}>
                circle
              </div>
              <div className={styles.location}>
                <div className={styles.address}>
                  Bengaluru, Karnataka, India
                </div>
                <div className={styles.updateLocation}>
                  Based on your places (Home) • Update location
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
