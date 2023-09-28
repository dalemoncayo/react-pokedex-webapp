import { POKEMON_TYPES } from "../utils/constants";

type TypeDropdownProps = {
  selectedType: string;
  onChange: (value: string) => void;
};

function TypeDropdown({ selectedType, onChange }: TypeDropdownProps) {
  return (
    <div className="mb-3">
      <label className="form-label">Type</label>
      <select
        className="form-select"
        value={selectedType}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        {POKEMON_TYPES.map((type: string, index: number) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TypeDropdown;
