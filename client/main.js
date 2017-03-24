import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import '../imports/startup/accounts-config.js'
import App from '../imports/ui/App';
import Fincas from '../imports/ui/Fincas'
import Home from '../imports/ui/Home';
import Animal from '../imports/ui/Animal';
import '../imports/api/fincas.js';

FlowRouter.route('/', {
    name: 'Home',
    action() {
        mount(App, {
            main: <Home/>,
        });
    },
});
FlowRouter.route('/fincas', {
    name: 'Fincas',
    action() {
        mount(App, {
            main: <Fincas/>,
        });
    },
});
FlowRouter.route('/fincas/:fincaId/animals', {
    name: 'Fincas',
    action(params,queryParams) {
        mount(App, {
            main: <Animal/>,
        });
    },
});
