import { useState } from "react";
import useDebounce from "../hooks/use-debounce";
const DebouncedInput = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const debouncedValue = useDebounce(inputText, 1000, () => {});

  return (
    <div>
      <p>{debouncedValue}</p>
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleInputChange}
        value={inputText}
      />
    </div>
  );
};

export default DebouncedInput;
