"use client";

import "./ColorPicker.scss";
import { useSelect } from "@/hooks/useSelect";

export interface ColorOption {
  color: string | number;
  HEX: string;
};

interface ColorPickerProps {
  options: ColorOption[];
}

const SelectColor = ({ options }: ColorPickerProps) => {
  const { index: currentIndex, setIndex, currentItem } = useSelect(options);

  return (
    <div className="ui-color-picker">
      {options.map((option, index) => {
        return (
            <label key={option.color} onClick={() => setIndex(index)}>
              <span className={index == currentIndex ? "active" : undefined}>
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
