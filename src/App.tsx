import { Header } from "./components/header/Header";
import { TaskCards } from "./components/task/TaskCards";

const App: React.VFC = () => {
  return (
    <div className='app'>
      <Header/>
      <TaskCards />
    </div>
  );
}

export default App;
