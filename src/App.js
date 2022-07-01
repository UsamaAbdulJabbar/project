import logo from './logo.svg';
import './App.css';
import RoutingApp from './config/routing/routingApp';
import { Provider } from 'react-redux';
import store from './config/redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RoutingApp/>

      </Provider>
    </div>
  );
}

export default App;
