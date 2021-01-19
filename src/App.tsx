import React, { FC } from 'react';
import './App.less';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './router/route'
import store from './store/index'
import { Provider } from 'react-redux'

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          {
            routes.map((item, idx) => {
              if (item.exact) {
                return <Route key={idx} exact path={item.path} component={item.component}></Route>
              } else {
                return <Route key={idx} path={item.path} component={item.component}></Route>
              }
            })
          }
        </Provider>
      </div>
    </Router>
  );
}

export default App;
