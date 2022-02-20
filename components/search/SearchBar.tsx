import type {
  FC,
  ReactElement,
  ChangeEventHandler,
  KeyboardEventHandler
} from 'react';
import { useState } from 'react';
import { SearchIcon } from '../../modules/icons';

interface SearchBarProps {
  handleSubmit: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = (props): ReactElement => {
  const [value, setValue] = useState<string>('');

  const submitValue = (): void => {
    props.handleSubmit(value);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') submitValue();
  };

  return (
    <div className="search-bar-container">
      <div className="form-container">
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="submit" onClick={submitValue}>
        <SearchIcon className="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
