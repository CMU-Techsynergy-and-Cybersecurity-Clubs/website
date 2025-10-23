import { useState } from 'react';
import './TabContainer.css';

function TabContainer({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tab-container">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default TabContainer;
