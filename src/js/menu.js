import m from 'mithril';

var Menu = {
    view: function () {
        return m("nav", [
            m(m.route.Link, { href: "/" }, "Home"),
            m(m.route.Link, { href: "/page1" }, "Page 1"),
            m(".column",
                m("button", { "class": "button is-primary", "data-tooltip": "Tooltip Text1" }, "tooltip")
            ),
        ])
    }
}

export default Menu;
