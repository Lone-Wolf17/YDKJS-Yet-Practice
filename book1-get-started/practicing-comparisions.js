/// Practicing Comparisons

//  scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration (number of minutes).
/// It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd);
//  return false if the meeting violates the work day bounds.

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  let dayStartInMins = convertTimeStringToMinutes(dayStart);
  let dayEndInMins = convertTimeStringToMinutes(dayEnd);

  let startTimeInMins = convertTimeStringToMinutes(startTime);

  // Check if meeting starts within work hours
  if (dayStartInMins <= startTimeInMins && dayEndInMins >= startTimeInMins) {
    // check if meeting ends withing work hours
    let endTimeInMins = startTimeInMins + durationMinutes;
    if (endTimeInMins <= dayEndInMins) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  } else {
    console.log(false);
    return false;
  }
}

function convertTimeStringToMinutes(timeString) {
  let timeArray = timeString.split(":");
  let minutes = Number(timeArray[0]) * 60 + Number(timeArray[1]);

  return minutes;
}

scheduleMeeting("7:00", 15); // false
scheduleMeeting("07:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false
