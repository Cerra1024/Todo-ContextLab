import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import ThemeToggleButton from './components/ThemeToggleButton';
import { useTheme } from './context/ThemeContext';
import { useTodos } from './context/TodoContext';

function App() {
  const { theme } = useTheme();
  const { clearCompleted } = useTodos();

  return (
    <main className={`app ${theme}`}>
      <section className="todo-card">
        <div className="app-header">
          <h1>Todo App</h1>
          <ThemeToggleButton />
        </div>

        <TodoInput />

        <FilterButtons />

        <TodoList />

        <button onClick={clearCompleted}>
          Clear Completed
        </button>
      </section>
    </main>
  );
}

export default App;