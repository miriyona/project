import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import MyOrdersPage from './MyOrdersPage';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    name: state.Name,
    id: state.Id,
    plate: state.Plate,
  };
}


export default connect(mapStateToProps)(function Nav(props) {
  const { name, id, plate} = props;
  return (
    <nav class="navbar navbar-expand-lg bg-info">
      <div class="container">
        <div class="navbar-translate">
          <div class="navbar-brand">מספר רכב: {id}</div>
          <div class="navbar-brand">דגם רכב: <span>{plate}</span></div>
          <div class="navbar-brand">שם: {name}</div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-info" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="example-navbar-info">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              {/* <a class="nav-link" href="#pablo">
              <p>היסטורית ההזמנות שלי</p>
            </a> */}
              {/* <Router> */}
              <Link class="nav-link" to="/MyOrdersPage">היסטורית ההזמנות שלי</Link>
              {/* </Router> */}
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#pablo">
                <p>הזמנה חדשה</p>
              </a> */}
              {/* <Router> */}
              <Link class="nav-link" to="/newOrder">הזמנה חדשה</Link>
              {/* </Router> */}
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#pablo">
                <p>תקנון אתר</p>
              </a> */}
              {/* <Router> */}
              <Link class="nav-link" to="/rules">תקנון אתר</Link>
              {/* </Router> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
})