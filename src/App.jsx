
import './App.css'
import Content1 from './componets/Content1';
import Content2 from './componets/Content2';
import Content3 from './componets/Content3';
import Content4 from './componets/Content4';
import Content5 from './componets/Content5';
import Content6 from './componets/Content6';
import Header from './componets/Header'
import HomePage from './componets/HomePage';

function App() {
  return (
    <div className="bg-black min-h-screen text-white ">
      <Header />
      <HomePage />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
    </div>
  );
}

export default App
