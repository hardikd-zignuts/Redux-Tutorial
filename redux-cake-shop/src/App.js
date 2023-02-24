import './App.css';
import CakeShop from './components/CakeShop';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import CakeShopHook from './components/CakeShopHook';
import IceCreamShop from './components/IceCreamShop';
import NewCakeShop from './components/NewCakeShop';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeShop />
        <hr />
        <CakeShopHook />
        <hr />
        <IceCreamShop />
        <hr/>
        <NewCakeShop/>
      </div>
    </Provider>
  );
}

export default App;
