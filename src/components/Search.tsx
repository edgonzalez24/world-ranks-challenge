import { Input } from "./ui/input";
import SearchIcon from "../assets/images/search.svg";
import { useRef, useImperativeHandle, forwardRef } from 'react';

export interface SearchProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string
}
export interface SearchHandle {
  focus: () => void;
}

const Search = forwardRef<SearchHandle, SearchProps> (({ placeholder, onChange, id }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const activate = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useImperativeHandle(ref, () => ({
    focus: activate,
  }));


  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
        <img src={SearchIcon} alt="search" className="w-8 h-8" />
      </div>
      <Input
        id={id}
        ref={inputRef}
        placeholder={placeholder}
        className="w-full block pl-10 bg-transparent text-gray-200 placeholder:text-gray-200 border-0 bg-dark-100 rounded-lg py-2 transition duration-300 ease-in-out"
        onChange={onChange}
      />
    </div>
  );
});

export default Search;