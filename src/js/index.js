import React from 'react';
import router from './routes/router';

require('../css/app.scss');

router.run((Handler, state) => {
  React.render(<Handler {...state} />, document.getElementById('app'));
});
