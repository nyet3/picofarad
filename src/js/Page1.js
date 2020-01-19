import m from 'mithril';
import Menu from './menu';
import Calendar from './Calendar'

var Page1 = {
    view: function () {
        return [
            m(Menu),
            m(".is-divider", { "data-content": "OR" }),
            m(Calendar)
        ]
    }
}

export default Page1;