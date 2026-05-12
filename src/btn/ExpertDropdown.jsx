import { useState } from 'react';

export default function ExpertDropdown({ onSelect }) {
  const [selectedExpert, setSelectedExpert] = useState("期望諮詢的專家");

  const expert = [
    "數位遊牧先驅" , 
    "個人品牌策略專家" , 
    "財務自由規劃顧問" , 
    "創意接案與多元收入專家" , 
    "遠端工作技術顧問" , 
  ];

  const handleItemClick = (item) => {
    setSelectedExpert(item);

    if (onSelect) {
      onSelect(item);
    }
  };    

  return (
    <div className="dropdown mb-lg-5 mb-4">
      <button 
        className="form-select text-start py-3" 
        type="button" 
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedExpert}
      </button>

      <ul className="dropdown-menu w-100 mt-2">
        {expert.map((item, i) => (
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