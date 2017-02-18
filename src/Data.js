import Immutable from 'immutable';
import React from 'react';

//Drawer navlinks
//Contact page: {link: '/contact', body: 'Contact'} (Add this back in if contact page is wanted. Currently empty)
const drawerLinks = Immutable.List([{link: '/', body: 'Home'}, {link: '/publications', body: 'Publications'}, {link: '/teaching', body: 'Teaching'}, {link: '/presentations', body: 'Presentations'}, {link: '/bio', body: 'Bio'}, {link: '/cv', body: 'CV'},{link: '/news', body: 'News'}]);

export {drawerLinks};
