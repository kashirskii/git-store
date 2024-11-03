"use client";

import "./SelectColor.scss";

export interface ColorOption {
  color: string | number;
  HEX: string;
}

export interface SelectColorProps {
  options: ColorOption[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const SelectColor = ({
  options,
  currentIndex,
  setCurrentIndex,
}: SelectColorProps) => {
  return (
    <ul className="ui-select-color">
      {options.map((option, index) => {
        return (
          <li key={option.color} onClick={() => setCurrentIndex(index)}>
            <label>
              <span className={index === currentIndex ? "active" : undefined}>
                <span style={{ backgroundColor: option.HEX }} />
              </span>
              <input defaultValue={option.color} />
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export { SelectColor };
