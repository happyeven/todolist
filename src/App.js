import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoListPage from './components/ToDoListPage';
import FinishList from './components/FinishList';
import TopMenu from './components/Menu';
import {Spin} from 'antd';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, HashRouter} from 'react-router-dom';
import Button from './hookcomponent/button';
import {Container} from './hookcomponent/context/container'
import ReducerButton from "./hookcomponent/hookbuttonusereducer";

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">

                <HashRouter>
                    <TopMenu/>
                    <Route exact path="/" component={ToDoListPage}/>
                    <Route path="/finish" component={FinishList}/>
                </HashRouter>
                <Button/>
                <Container/>
                <ReducerButton/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {loading: state.loadingReducer.loading};
}

//export default connect(mapStateToProps)(App)
export default App
