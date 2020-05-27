import './calendar.js';
import './widget.js';
import { LitElement, html, css } from 'lit-element';
import { getDateFromISODate } from '@brightspace-ui/core/helpers/dateTime.js';
import { formatDate } from '@brightspace-ui/intl/lib/dateTime.js';

const events = [
	{ date: 'May 11, 2020', time: 'All Day', text: 'Long Sad Day Having To Tell Everyone That I Am Leaving' },
	{ date: 'May 12, 2020', time: '2:00 PM to 2:30 PM', text: 'Last UI Platform Oxygen/Water Meeting' },
	{ date: 'May 12, 2020', time: '2:30 PM to 3:00 PM', text: 'Last Quizzing Oxygen/Water Meeting' },
	{ date: 'May 13, 2020', time: '4:00 PM to 5:00 PM', text: 'Discuss Site Tabs' },
	{ date: 'May 21, 2020', time: '1:00 PM to 3:30 PM', text: 'Global Accessibility Awareness Day - Internal Demo Day' },
	{ date: 'May 21, 2020', time: '3:30 PM to 4:30 PM', text: 'Last D2L Town Hall' },
	{ date: 'May 22, 2020', time: '1:00 PM to 2:00 PM', text: 'I am an accessibility expert, AMA - Carin Headrick, Jeff Geurts, Maya Jones, Sam Chandrashekar, and Sandra Earl' },
	{ date: 'May 22, 2020', time: '4:30 PM to 5:00 PM', text: 'Handoff Browser Support Work to Laura' },
	{ date: 'May 27, 2020', time: '4:00 PM to 5:00 PM', text: 'Farewell [Virtual] Drinks' },
	{ date: 'May 29, 2020', time: '12:00 PM to 1:30 PM', text: 'Goodbye Lunch with Gaudi' },
	{ date: 'May 29, 2020', time: '2:30 PM to 3:00 PM', text: 'Last UX Dev & Design Demo' },
	{ date: 'Jun 1, 2020', time: 'All Day', text: 'Do Not Go To Work Today'},
	{ date: 'Jun 8, 2020', time: 'All Day', text: 'Good Luck With The New Job!'}
];

export class CalendarWidget extends LitElement {

	static get properties() {
		return {
			_activeDay: { type: String, attribute: false }
		}
	}

	static get styles() {
		return css`
			:host {
				display: block;
			}

			.events-list {
				border: 1px solid var(--d2l-color-gypsum);
				border-radius: 6px;
				box-sizing: border-box;
				margin-top: 20px;
    			padding: 0 20px;
			}
		`;
	}

	constructor() {
		super();
		this._activeDay = 'May 29, 2020';
	}

	render() {
		const activeEvents = events.filter(event => event.date === this._activeDay);
		let eventList = activeEvents.map(
			event => {
				return html`<p><b>${event.time}</b> - ${event.text}</p>`;
			}
		);
		if (eventList.length === 0) {
			eventList = html`<p>There are no events to display.</p>`
		}

		return html`
			<goodbye-sandra-widget name="Calendar">
				<goodbye-sandra-calendar
					@d2l-calendar-selected="${this._handleCalendarDaySelected}"
					.eventDates="${events.map(event => event.date)}"
					selected-value="2020-05-29"
					summary="Click on a day to see that day's events.">
				</goodbye-sandra-calendar>
				<div class='events-list'>
					<h4>Events for ${this._activeDay}</h4>
					${eventList}
				</div>
			</goodbye-sandra-widget>
		`;
	}

	_handleCalendarDaySelected(e) {
		this._activeDay = formatDate(getDateFromISODate(e.detail.date), {format: 'medium'});
	}

}

customElements.define('goodbye-sandra-calendar-widget', CalendarWidget);
