import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation'
import withParams from './withParams'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import TodoComponent from './TodoComponent'
import ErrorComponent from './ErrorComponent'

class TodoApp extends Component {

    render() {

        return (
            <div className="TodoApp">                
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={
                                <AuthenticatedRoute>
                                    <WelcomeComponentWithParams />
                                </AuthenticatedRoute>
                            } />
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponentWithNavigation />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/todos/:id" element={
                            <AuthenticatedRoute>
                                <TodoComponentWithParamsAndNavigation />
                            </AuthenticatedRoute>
                        } />
                        <Route path="*" element={<ErrorComponent/>} />
                    </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )

    }

}

const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
const LoginComponentWithNavigation = withNavigation(LoginComponent);
const WelcomeComponentWithParams = withParams(WelcomeComponent);
const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent);
const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));

export default TodoApp;
