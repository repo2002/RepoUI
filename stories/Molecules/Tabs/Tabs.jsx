import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

const Tabs = ({
  tabs,
  activeTab,
  onChange,
  variant = 'default',
  alignment = 'start',
  size = 'md',
  orientation = 'horizontal',
  className,
  children,
}) => {
  const [selectedTab, setSelectedTab] = useState(activeTab || tabs[0]?.id);

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div className={`tabs ${orientation === 'vertical' ? 'tabs--vertical' : ''} ${className || ''}`}>
      <div 
        className={`tabs__list tabs--${variant} tabs--${alignment} tabs--${size}`}
        role="tablist"
        aria-orientation={orientation}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tabs__tab ${selectedTab === tab.id ? 'tabs__tab--active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
            role="tab"
            aria-selected={selectedTab === tab.id}
            aria-controls={`panel-${tab.id}`}
          >
            {tab.icon && <span className="tabs__icon">{tab.icon}</span>}
            {tab.label && <span className="tabs__label">{tab.label}</span>}
            {tab.badge && <span className="tabs__badge">{tab.badge}</span>}
          </button>
        ))}
      </div>
      <div className="tabs__content">
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;
          
          return React.cloneElement(child, {
            role: 'tabpanel',
            id: `panel-${child.props['data-tab-id']}`,
            'aria-labelledby': child.props['data-tab-id'],
            hidden: child.props['data-tab-id'] !== selectedTab,
          });
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    icon: PropTypes.node,
    badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ariaLabel: PropTypes.string,
  })),
  activeTab: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'pills', 'underlined']),
  alignment: PropTypes.oneOf(['start', 'center', 'end']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Tabs;