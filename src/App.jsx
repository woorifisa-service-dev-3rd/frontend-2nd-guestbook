import TodoBody from './components/todos/TodoBody'
import TodoHeader from './components/todos/TodoHeader'
import DefaultLayout from './layouts/DefaultLayout'

function App() {

  return (
    <>
      <DefaultLayout>
        <header>
        
          <div className="flex justify-center">
            <a to="/" className='flex'>
              <h1 className='py-8 text-red-200 max-w-max text-7xl'>todos
              </h1>
              <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cat%20with%20Wry%20Smile.png" alt="Cat with Wry Smile" width="50" height="50" />
            </a>
          </div>
        </header>
        <section className="max-w-xl m-4 mx-auto">
          <TodoHeader />
          <TodoBody />
        </section>
      </DefaultLayout>
    </>
  )
}

export default App
