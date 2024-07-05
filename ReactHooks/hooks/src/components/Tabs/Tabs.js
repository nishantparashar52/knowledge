import React, {useState} from "react";
import './Tabs.css';

const Tab = ({label, activeTab, onClick, classes}) => (
    <div
    className={`${classes} ${activeTab ? 'active': ''}`}
    onClick={onClick}
    >{label}</div>
)
const Content = ({content, classes}) => (
    <div className={classes}>{content}</div>
)


export const Tabs = ({tabs, tabClassName, contentClassName, defaultTab, selectedTabHandler}) => {
    const [activeTab, setActiveTab] = useState(defaultTab || 0);

    const clickHandler = (index) => {
        setActiveTab(index);
        selectedTabHandler(index);
    }
    return (
        <div className="tabs-wrapper">
            <div className="tabs-container">
            {tabs.map((tab, index) => (
                <Tab
                label={tab.label}
                classes={tabClassName}
                activeTab={index === activeTab}
                onClick={clickHandler.bind(null, index)}
                key={index}
                />
            ))}
            </div>
            <Content content={tabs[activeTab]?.content} classes={contentClassName} />
        </div>
    )

}