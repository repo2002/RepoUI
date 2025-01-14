import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Atoms/Button/Button';
import './Tabs.scss';

const Tabs = ({
  tabs,
  activeTab,
  onChange,
  variant = 'default',
  alignment = 'start',
  className,
}) => {
  const [selectedTab, setSelectedTab] = useState(activeTab || tabs[0]?.id);

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div 
      className={`tabs tabs--${variant} tabs--${alignment} ${className || ''}`}
      role="tablist"
    >
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant={selectedTab === tab.id ? 'primary' : 'ghost'}
          onClick={() => handleTabClick(tab.id)}
          className="tabs__tab"
          role="tab"
          aria-selected={selectedTab === tab.id}
          aria-controls={`panel-${tab.id}`}
        >
          {tab.icon && <Icon name={tab.icon} className="tabs__icon" />}
          {tab.label}
          {tab.badge && (
            <span className="tabs__badge">{tab.badge}</span>
          )}
        </Button>
      ))}
      <div className="tabs__indicator" />
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  activeTab: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'pills', 'underlined']),
  alignment: PropTypes.oneOf(['start', 'center', 'end']),
  className: PropTypes.string,
};

export default Tabs; 