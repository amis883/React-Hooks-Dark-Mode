import './App.css';
import useDarkMode from './useDarkMode'
function App() {
  const [theme, toggleTheme] = useDarkMode()
  return (
    <div className="App" style={{ background: theme === 'dark' ? '#212121' : '#fff', transition: '.2s all' }}>

      <button type="button" onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
}

export default App;
