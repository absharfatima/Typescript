// Enum for days of the week
enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  
  // Function that logs a message based on the day
  function logMessageBasedOnDay(day: DaysOfWeek): void {
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
