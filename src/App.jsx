import { useState } from 'react'
import TodoBody from './components/todos/TodoBody'
import TodoHeader from './components/todos/TodoHeader'
import DefaultLayout from './layouts/DefaultLayout'
import GuestBookHeader from './components/guestbooks/GuestBookHeader'
import GuestBookBody from './components/guestbooks/GuestBookBody'
import GuestBookContainer from './components/guestbooks/GuestBookContainer'

const dummyTodos = [
  {
    id: 1,
    title: 'React 공부',
    summary: 'React를 공부한다.',
    category: 'TODO',
  },
  {
    id: 2,
    title: '점심 먹기',
    summary: '점심을 먹는다.',
    category: 'PROGRESS',
  },
  {
    id: 3,
    title: '커피 마시기',
    summary: '커피를 마신다.',
    category: 'DONE',
  }
]

function App() {

  const [todos, setTodos] = useState(dummyTodos);
  const [selectedCategory, setFilter] = useState('ALL');

  // Todo 등록 기능, 파라미터로 새롭게 추가할 Todo 객체를 받음
  const addTodoHandler = ({ title, summary, category }) => {

    // id값을 추가해서 Todo 등록
    const newTodo = {
      id: self.crypto.randomUUID(), // Web Crypto API
      title,
      summary,
      category
    }

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  }

  // Todo 수정 기능, 파라미터로 업데이트할 Todo 객체를 받음
  const updateTodoHandler = (updateTodo) => {
    const updatedTodos = todos.map(todo => todo.id === updateTodo.id ? updateTodo : todo);
    setTodos(updatedTodos);
  }

  // Todo 삭제 기능
  const deleteTodoHandler = (id) => setTodos(todos.filter(todo => todo.id !== id));

  // Todo 필터링 기능
  const filterTodos = () => selectedCategory === 'ALL' ?
                            todos : todos.filter(todo => todo.category === selectedCategory);
  // 필터링된 Todo 리스트(배열)
  const filteredTodos = filterTodos();
  console.log(filteredTodos);
                                              
  return (
    <>
      <DefaultLayout> 
        <header >
          <div className="flex justify-center">
            <a to="/" className='flex'>
              <h1 className='py-8 text-red-200 max-w-max text-7xl'>todos
              </h1>
              <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cat%20with%20Wry%20Smile.png" alt="Cat with Wry Smile" width="50" height="50" />
            </a>
          </div>
        </header>
        <div className='flex gap-12 justify-center w-full'>
          <section className="max-w-xl m-8 mx-auto w-full">
            <TodoHeader onAdd={addTodoHandler} category={selectedCategory} onFilter={setFilter}/>
            <TodoBody todos={filteredTodos} onUpdate={updateTodoHandler} onDelete={deleteTodoHandler}/>
          </section>
          <GuestBookContainer />
        </div>
      
      
      </DefaultLayout>
    </>
  )
}

export default App
