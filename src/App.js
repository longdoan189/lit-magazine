import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Home from "./component/Home/Home"
import About from "./component/About"
import Post from "./component/Post"
import Criticism from "./component/Criticism"
import Creative_works from "./component/Creative_works"
import Interview from "./component/Interview"
import SinglePost from "./component/SinglePost"
import Magazine_issue from "./component/Magazine_issue"
import Subscribe from "./component/Subscribe"
import PageNotFound from "./component/PageNotFound"
import { Common } from "./template/Common";
import Start from "./template/Start";

export const history = createBrowserHistory();
function App() {
  
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Start path="/" exact/>
          <Common Component={Home} path="/home"/>
          <Common Component={About} path="/about"/>
          <Common Component={SinglePost} path="/post/:slug"/>
          <Common Component={Post} path="/post"/>
          <Common Component={Criticism} path="/criticism"/>
          <Common Component={Creative_works} path="/creative_works"/>
          <Common Component={Interview} path="/interview"/>
          <Common Component={Magazine_issue} path="/magazine_issue"/>
          <Common Component={Interview} path="/interview"/>
          <Common Component={Subscribe} path="/subscribe"/>
          <Common Component={PageNotFound} path="*" exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
