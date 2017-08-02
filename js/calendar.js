function calendar(date) {
    // If no parameter is passed use the current date.
    if(date == null) {
        date = new Date();
    }

    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    var months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

    var thisMonth = new Date(year, month, 1);
    var nextMonth = new Date(year, month + 1, 1);

    // Determine when this month starts and ends.
    var firstWeekDay = thisMonth.getDay();
    var daysInThisMonth = Math.round((nextMonth.getTime() - thisMonth.getTime()) / (1000 * 60 * 60 * 24));

    var calendarHTML = '<table>';
    calendarHTML += '<tr><td colspan="7" id="text-center">' + months[month] + ' ' + year + '</td></tr>';
    calendarHTML += "<tr>";

    // Fill the first week of the month with the correct number of blanks.
    for(weekDay = 0; weekDay < firstWeekDay; weekDay++) {
        calendarHTML += "<td> </td>";
    }

    weekDay = firstWeekDay;
    for(dayCounter = 1; dayCounter <= daysInThisMonth; dayCounter++) {
        weekDay %= 7;

        if(weekDay == 0) {
            calendarHTML += "</tr><tr>";
        }

        // Style the current day.
        if(day == dayCounter) {
            calendarHTML += "<td><span>" + dayCounter + "</span></td>";
        }
        else {
            calendarHTML += "<td> " + dayCounter + " </td>";
        }

        weekDay++;
    }

    calendarHTML += "</tr>";
    calendarHTML += "</table>";

    // Display the finished calendar.
    document.write(calendarHTML);
}


