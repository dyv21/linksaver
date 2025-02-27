import {useAppContext} from "./context.jsx";




function App() {
  const {state, dispatch} = useAppContext()

  console.log(state)
  return (
    <>
      <div>
        LinkSaver
      </div>

    </>
  )
}

export default App
