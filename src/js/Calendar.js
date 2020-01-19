import m from "mithril"
import bulmaCalendar from "../../node_modules/bulma-extensions/bulma-calendar/dist/js/bulma-calendar.js"

class Calendar {

    view() {
        return m("input", { type: "date" })
    }

    oncreate({ dom }) {
        const options = {};
        this.instance = new bulmaCalendar(dom, options);
    }

    onSelectDateTimePicker(event) {
        console.log(event)
    }
}

export default Calendar;