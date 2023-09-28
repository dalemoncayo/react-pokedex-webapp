type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="mb-3">
      <label className="form-label">Search</label>
      <input
        type="text"
        className="form-control"
        placeholder="Search Pokemon .."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
