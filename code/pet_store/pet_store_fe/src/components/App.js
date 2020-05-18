import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BaseRouter from '../routes';
import { HashRouter as Router } from 'react-router-dom';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUser } from '../actions/auth'


class App extends Component{

    componentDidMount(){
        this.props.getUser();

//        this.props.authCheckState();
    }

    render(){
        return(
        <>
                <Router>
                    <BaseRouter />
                </Router>
        </>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: () => dispatch(getUser()),
  };
}

//ReactDOM.render(<App />, document.getElementById('app'));
export default connect(null, mapDispatchToProps)(App);
