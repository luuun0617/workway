import { useState, useRef, useEffect } from 'react';

export default function WorkDropdown({ onSelect }) {
  const [selectedWork, setSelectedWork] = useState("目前職業/工作身分");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const work = [
    "全職上班族",
    "兼職工作者",
    "自由工作者/接案者",
    "數位遊牧者",
    "創業者/企業主",
    "待業中",
    "其他",
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
    setSelectedWork(item);
    setIsOpen(false);
    if (onSelect) onSelect(item);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="form-select text-start py-3"
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {selectedWork}
      </button>

      <ul className={`dropdown-menu w-100 mt-2${isOpen ? ' show' : ''}`}>
        {work.map((item, i) => (
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
