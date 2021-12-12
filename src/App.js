import './App.css';
import Ebook from './components/Ebook';
import Calender from './components/Calender';
import Members from './components/Members';
import Summary from './components/Summary';
import Home from './components/Home';
import {Switch,Route,Router} from 'react-router-dom';
function App() {
  return (
   <Switch>
   <Route exact path="/" component={Ebook}></Route>
   <Route path="/home" component={Home}></Route>
   <Route path="/members" component={Members}></Route>
   <Route path="/summary" component={Summary}></Route>
   <Route path="/calender" component={Calender}></Route>
   </Switch>
   
  );
}

export default App;
