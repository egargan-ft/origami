# o-date

o-date provides javascript utilities for formatting and updating dates in FT style

## Core experience

To provide the best non-js fallback you should markup your dates as follows

    <time datetime={date.toISOString()}>{FT formatted date (including time if appropriate)}</time>

This module's `format` method will also run in node and can be used to populate your viewmodel with the appropriate formatted date string. It's not recommended to output the 'time ago' server side as it will not be cacheable and will not update in the browser if the user leaves the page open for a prolonged period of time.

## API

### o-date#format(date, tpl)

Returns a date formatted as a string

* `date` A javascript `Date` object or a valid string to pass to the `Date` constructor
* `tpl`  A string specifying what format to output the date in:

     - 'datetime': formats the date in the standard FT long format, including the time e.g. May 15, 2014 8:10 am
     - 'date': formats the date in the standard FT long format e.g. May 15, 2014
     - Any other string: time date placeholders will be replaced with values extracted from the date provided (see `main.js` for valid placeholder strings). To avoid e.g. the 'mm' in 'common' being replaced with the month prefix with a double backslash 'co\\mmon' i.e. *In most cases this should not be used, in favour of the standard FT date and datetime formats'

### o-date#timeAgo(date)

Returns the time since the given date, formatted as a human readable string e.g. '13 minutes ago'. 

* `date` A javascript `Date` object or a valid string to pass to the `Date` constructor

### o-date#init(el, self) 

Within a given container element converts dates to display using the time ago format and periodically updates their values. Within the container all elements with the class `o-date` and all `<time>` elements will be updated, with the exception of those with the class `o-date--ignore`. If the element contains an element with the class `o-date__printer` the time ago string will be output here, otherwise it will replace the contents of the element.

* `container` A `HTMLElement` within which to scan for `.o-date` and `<time>` elements
* `self` Boolean: if true then `el` itself will have its value updated, rather than querying for suitable elements within it