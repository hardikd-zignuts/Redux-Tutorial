import './App.css';
import CakeShop from './components/CakeShop';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeShop />
      </div>
    </Provider>
  );
}

export default App;
