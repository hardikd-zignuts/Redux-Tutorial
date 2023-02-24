import './App.css';
// import CakeShop from './components/CakeShop';
import { Provider } from 'react-redux';
import store from './Redux/Store';
// import CakeShopHook from './components/CakeShopHook';
// import IceCreamShop from './components/IceCreamShop';
// import NewCakeShop from './components/NewCakeShop';
// import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <u>Using Second Argument of mapStateToProps Function</u>
        <ItemContainer cake/>
        <ItemContainer />
        <hr />
        <CakeShop />
        <hr />
        <CakeShopHook />
        <hr />
        <IceCreamShop />
        <hr />
        <NewCakeShop /> */}

        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
