import '../scss/style.scss';
import m from 'mithril';
import Home from './Home';
import Page1 from './Page1';

m.route(document.body, "/", {
    "/": Home,
    "/page1": Page1,
})
