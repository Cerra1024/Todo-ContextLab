import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Filter } from '../types';

interface FilterContextValue {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const FilterContext = createContext<FilterContextValue | undefined>(undefined);

interface FilterProviderProps {
  children: ReactNode;
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<Filter>('all');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilter must be used inside FilterProvider');
  }

  return context;
}
