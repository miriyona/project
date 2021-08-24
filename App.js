import logo from './logo.svg';
import './App.css';
import './ExtrenalStyle.css';
import LoginOrRegister from "./LoginOrRegister";
import Nav from './Nav';
import Card from './Card';
import SignIn from './SignIn'
import CollapsibleTable from './CollapsibleTable';
import SetOfRules from './SetOfRules';
import MyOrdersPage from './MyOrdersPage';
import ComboBox from './ComboBox';
import SignInPage from './SignInPage';
import LogInPage from './LogInPage';
import NewOrder from './NewOrder';
import { Provider } from 'react-redux';
import Store from './Store';
import {BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
function App() {
  return (<Provider store={Store}>
  <>
    {/* <Nav></Nav> 
<Card/>
<SignIn></SignIn>
 <CollapsibleTable></CollapsibleTable> */}
    {/* <MyOrdersPage></MyOrdersPage> */}
    {/* <SetOfRules></SetOfRules> */}
    {/* <SignInPage></SignInPage>  */}
    {/* <ComboBox></ComboBox> */}
    < Router>
      <Switch>
       
        <Route path="/enter">
          <SetOfRules></SetOfRules>
        </Route>
        <Route path="/makeAccount">
          <SignInPage></SignInPage>
        </Route>
        <Route path="/MyOrdersPage">
          <MyOrdersPage></MyOrdersPage>
        </Route>
        <Route path="/rules">
            <SetOfRules></SetOfRules>
        </Route>
        <Route path="/newOrder">
          <NewOrder></NewOrder>
        </Route>
        <Route path="/login">
          <LogInPage></LogInPage>
        </Route>
        <Route path="/">
          <LogInPage></LogInPage>
        </Route>
      </Switch>
    </ Router>
  </>
  </Provider>
  );

}

export default App;
