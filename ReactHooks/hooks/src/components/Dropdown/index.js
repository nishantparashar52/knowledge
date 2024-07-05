// import React from 'react';

// export const Dropdown = ({ data }) => {
//     debugger;
//   const renderOptions = (options) => {
//     return options.map((option) => (
//       <option key={option.id} value={option.id}>
//         {option.name}
//       </option>
//     ));
//   };

//   const renderNestedDropdown = (nestedData) => {
//     return nestedData.map((item) => (
//       <optgroup key={item.id} label={item.name}>
//         {item.children ? (
//           renderNestedDropdown(item.children)
//         ) : (
//           renderOptions(item.options)
//         )}
//       </optgroup>
//     ));
//   };

//   return <select>{renderNestedDropdown(data)}</select>;
// };

// export default Dropdown;

import React, { useState } from 'react';

export const Dropdown = ({ data }) => {
  const [activeGroups, setActiveGroups] = useState([]);

  const toggleGroup = (groupId) => {
    if (activeGroups.includes(groupId)) {
      setActiveGroups(activeGroups.filter((id) => id !== groupId));
    } else {
      setActiveGroups([...activeGroups, groupId]);
    }
  };

  const renderOptions = (options) => {
    return options.map((option) => (
      <option key={option.id} value={option.id}>
        {option.name}
      </option>
    ));
  };

  const renderNestedDropdown = (nestedData) => {
    return nestedData.map((item) => (
      <optgroup
        key={item.id}
        label={item.name}
        className={activeGroups.includes(item.id) ? 'active' : ''}
      >
        {item.children ? (
          <>
            <option disabled>Select an option</option>
            <option onClick={() => toggleGroup(item.id)}>Toggle Group</option>
            {renderNestedDropdown(item.children)}
          </>
        ) : (
          renderOptions(item.options)
        )}
      </optgroup>
    ));
  };

  return <select>{renderNestedDropdown(data)}</select>;
};

export default Dropdown;