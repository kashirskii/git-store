"use client";

import "./SelectColor.scss";

export interface ColorOption {
  color: string | number;
  HEX: string;
}

interface SelectColorProps {
  options: ColorOption[];
  currentIndex: number;
  setCurrentIndex: (...args: any) => void;
}

const SelectColor = ({
  options,
  currentIndex,
  setCurrentIndex,
}: SelectColorProps) => {
  return (
    <div className="ui-select-color">
      {options.map((option, index) => {
        return (
          <label key={option.color} onClick={() => setCurrentIndex(index)}>
            <span className={index === currentIndex ? "active" : undefined}>
              <span style={{ backgroundColor: option.HEX }} />
            </span>
            <input defaultValue={option.color} />
          </label>
        );
      })}
    </div>
  );
};

export { SelectColor };
