import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Info from './pages/Info';
import VisitHistory from './pages/VisitHistory';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn'



function App() {
  return (
    <>    
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/info' component={Info} />
        <Route path='/visitHistory' component={VisitHistory} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/signIn' component={SignIn} />

      </Switch>
    </>
  );
}

export default App;
