import { useState } from 'react';

export default function WorkDropdown({ onSelect }) {
  
  const [selectedWork, setSelectedWork] = useState("目前職業/工作身分");

  const work = [
    "全職上班族" , 
    "兼職工作者" , 
    "自由工作者/接案者" , 
    "數位遊牧者" , 
    "創業者/企業主" , 
    "待業中" , 
    "其他"
    ];

    const handleItemClick = (item) => {
      setSelectedWork(item);

      if (onSelect) {
        onSelect(item);
      }
    };    

  return (
    <div className="dropdown">
      <button 
        className="form-select text-start py-3" 
        type="button" 
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedWork}
      </button>

      <ul className="dropdown-menu w-100 mt-2">
        {work.map((item, i) => (
          <li key={i}>
            <button
              type="button"
              className="dropdown-item"
              style={{ cursor: 'pointer' }}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}