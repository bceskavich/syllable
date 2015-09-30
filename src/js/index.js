import React from 'react';
import router from './routes/router';

require('../css/app.scss');
require('medium-editor/dist/css/medium-editor.min.css');
require('medium-editor/dist/css/themes/flat.min.css');

React.render(router, document.getElementById('app'));
