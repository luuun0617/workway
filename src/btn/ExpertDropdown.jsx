import { useState, useRef, useEffect } from 'react';

export default function ExpertDropdown({ onSelect }) {
  const [selectedExpert, setSelectedExpert] = useState("期望諮詢的專家");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const expert = [
    "數位遊牧先驅",
    "個人品牌策略專家",
    "財務自由規劃顧問",
    "創意接案與多元收入專家",
    "遠端工作技術顧問",
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (item) => {
    setSelectedExpert(item);
    setIsOpen(false);
    if (onSelect) onSelect(item);
  };

  return (
    <div className="dropdown mb-lg-5 mb-4" ref={dropdownRef}>
      <button
        className="form-select text-start py-3"
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {selectedExpert}
      </button>

      <ul className={`dropdown-menu w-100 mt-2${isOpen ? ' show' : ''}`}>
        {expert.map((item, i) => (
          <li key={i}>
            <button
              type="button"
              className="dropdown-item"
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
