import m from 'mithril';
import Menu from './menu';

var Home = {
    view: function () {
        return [
            m(Menu),
            m(".is-divider", { "data-content": "OR" }),
            m("h1", "Home"),
        ]
    }
}

export default Home;