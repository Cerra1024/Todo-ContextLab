import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

function TodoInput() {
  const [text, setText] = useState('');

  const { addTodo } = useTodos();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (text.trim() === '') return;

    addTodo(text.trim());

    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoInput;
