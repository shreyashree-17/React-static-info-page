import './App.css';
import Header from './components/header';
import Body from './components/body';

function App() {
  const [darkMode, setDarkMode]= React.useState(false)
    const toggle=()=>{
        setDarkMode(prevmode=>!prevmode)
    }
  return (
    <div className="container">
       <Header toggleDarkMode = {toggle} darkMode={darkMode}/>
        <Body darkMode={darkMode}/>
    </div>
  );
}

export default App;
