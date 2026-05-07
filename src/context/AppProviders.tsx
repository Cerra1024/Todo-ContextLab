import type { ReactNode } from 'react';

import { TodoProvider } from './TodoContext';
import { FilterProvider } from './FilterContext';
import { ThemeProvider } from './ThemeContext';

interface AppProvidersProps {
  children: ReactNode;
}

function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>{children}</FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default AppProviders;