function notify() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Birthday shit"); //get the spreadsheet
  
  var cal = CalendarApp.getCalendarById("8ptsjgq4nlgo52ham673a00qpc@group.calendar.google.com"); //get the calendar
  var names = sheet.getRange("A3:A102").getValues(); // get everyone's name
  var bdays = sheet.getRange("B3:B102").getValues(); // and birthdays
  var ages = sheet.getRange("C3:C102").getValues(); //and how old they are, in days
  var round = sheet.getRange("E3:E102").getValues(); //and when they'll turn a multiple of 500 days
  for (var i=0; i<100; i++){ //go through 100 names

    if (names[i]==""){ //if it's a blank name, we've reached the end of the list and we can all go back to our miserable lives
      Logger.log("break");
      break;
    }
    //Shay's column: back from the spreadsheet to fuck with me
    var newage = String(500 + +ages[i] - +ages[i]%500); //get the age they'll turn in days at the next round date
    var newdate = new Date(new Date(round[i]).getTime()+86400000); //contemplate why we're even alive and whether it's instantly reversible because i'm fuckin donneeeee
    var nextbirthday = new Date(new Date(bdays[i]).getTime()+86400000); //fuck with shit
    nextbirthday.setFullYear(2021); //fuck with other shit
    
    if (new Date() >= nextbirthday){ // :)+<|: look they're on a skateboard
      nextbirthday.setFullYear(new Date().getFullYear()+1) //trigger warning, suicide: i wanna blow my brains out by this point
    }

    var newagey = nextbirthday.getFullYear()-new Date(bdays[i]).getFullYear() //pog

    events = cal.getEventsForDay(newdate); //and here's where we start blowing up and recalibrating calendars because claudia, you're inevitably gonna fuck something up just accept that. and then blow up the calendar and restart
    breaker=false //because we're gonna fuck something up
    for (var e=0; e<events.length; e++){ //if we already did that one we don't need the spiderman meme
      Logger.log(e)
      if (events[e].getTitle().includes("turns")){
        breaker=true //hello darkness my old friend
        break
      }
    }
    if (!breaker){
      cal.createAllDayEvent(names[i]+" turns "+newage+" days old", newdate); //we did itttttt
      Logger.log("logged "+names[i]+ " for "+newage+" on "+newdate)
      cal.createAllDayEvent(names[i]+" turns "+newagey+" years old", nextbirthday);
      Logger.log("logged "+names[i]+ " for "+newagey+" on "+nextbirthday)
    }
  }

}
