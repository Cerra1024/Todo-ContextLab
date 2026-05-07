import { useFilter } from '../context/FilterContext';
import type { Filter } from '../types';

function FilterButtons() {
  const { filter, setFilter } = useFilter();

  const filters: Filter[] = ['all', 'active', 'completed'];

  return (
    <div>
      {filters.map((filterOption) => (
        <button
          key={filterOption}
          onClick={() => setFilter(filterOption)}
        >
          {filter === filterOption ? `✓ ${filterOption}` : filterOption}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
