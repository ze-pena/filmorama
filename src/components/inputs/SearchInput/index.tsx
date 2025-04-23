import { Input, InputChange } from '@interfaces/Forms';

interface Search extends Input {
  value?: string;
  setter: (event: InputChange) => void;
}

import './styles.scss';

function SearchInput({ name, placeholder = '', value = '', setter }: Search) {
  return (
    <div className="search-input">
      <input
        placeholder={placeholder}
        type="search"
        name={name}
        id={name}
        value={value}
        onChange={setter}
      />

      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default SearchInput;
