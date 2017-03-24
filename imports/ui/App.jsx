import React, {Component} from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <p className="navbar-brand">Ganasoft</p>
                        </div>
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/fincas">Farms</a>
                            </li>
                            <li>
                              <AccountsUIWrapper />
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    {this.props.main}
                </div>
            </div>
        );
    }
}

export default App;
