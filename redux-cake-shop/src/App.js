import './App.css';
import CakeShop from './components/CakeShop';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import CakeShopHook from './components/CakeShopHook';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeShop />
        <hr />
        <CakeShopHook />
      </div>
    </Provider>
  );
}

export default App;
