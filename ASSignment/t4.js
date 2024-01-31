// Enum for days of the week
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
// Function that logs a message based on the day
function logMessageBasedOnDay(day) {
    switch (day) {
        case DaysOfWeek.Monday:
            console.log("It's Monday. Start of the week!");
            break;
        case DaysOfWeek.Tuesday:
            console.log("It's Tuesday. Productive day!");
            break;
        case DaysOfWeek.Wednesday:
            console.log("It's Wednesday. Halfway there!");
            break;
        case DaysOfWeek.Thursday:
            console.log("It's Thursday. Almost there!");
            break;
        case DaysOfWeek.Friday:
            console.log("It's Friday. Weekend is near!");
            break;
        case DaysOfWeek.Saturday:
            console.log("It's Saturday. Enjoy the weekend!");
            break;
        case DaysOfWeek.Sunday:
            console.log("It's Sunday. Relax and recharge!");
            break;
        default:
            console.log("Invalid day");
    }
}
// Example usage
logMessageBasedOnDay(DaysOfWeek.Wednesday);
logMessageBasedOnDay(DaysOfWeek.Friday);
