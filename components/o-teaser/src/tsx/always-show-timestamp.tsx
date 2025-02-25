import TimeStamp from './time-stamp';
import RelativeTime from './relative-time';
import {differenceInCalendarDays} from 'date-fns';
import { Status } from './props';

/**
 * Timestamp shown always, the default 4h limit does not apply here
 * If same calendar day, we show relative time e.g. X hours ago or Updated X min ago
 * If different calendar day, we show full Date time e.g. June 9, 2021
 */
export default (props: Status) => {
	const localTodayDate = new Date().toISOString().substr(0, 10); // keep only the date bit
	const dateToCompare = new Date(props.publishedDate)
		.toISOString()
		.substr(0, 10);

	if (differenceInCalendarDays(localTodayDate, dateToCompare) >= 1) {
		return <TimeStamp {...props} />;
	} else {
		return <RelativeTime {...props} showAlways={true} />;
	}
};
