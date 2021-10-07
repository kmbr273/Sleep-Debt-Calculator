const getSleepHours = day => {
    switch(day) {
      case 'monday':
      return 5
      break;
      case 'tuesday':
      return 7
      break;
      case 'wednesday':
      return 10
      break;
      case 'thursday':
      return 9
      break;
      case 'friday':
      return 8
      break;
      case 'saturday':
      return 8
      break;
      case 'sunday':
      return 9
      break;
      default:
      return "Error!"
    } 
   };
   const getActualSleepHours = () =>
   getSleepHours('monday') +
   getSleepHours('tuesday') +
   getSleepHours('wednesday') +
   getSleepHours('thursday') +
   getSleepHours('friday') +
   getSleepHours('saturday') +
   getSleepHours('sunday') 
   
   const getIdealSleepHours = () => {
   let idealHours = 10;
   return idealHours * 7;
   }; 
   
   const calculateSleepDebt = () => {
     const actualSleepHours = getActualSleepHours();
     const idealSleepHours = getIdealSleepHours();
   
   if(actualSleepHours === idealSleepHours)
   {
     console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) the right amount of sleep that you need this week. Keep it up!');}
   
   else if(actualSleepHours > idealSleepHours)
   {
     console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more sleep than you needed this week. Get out of bed!');
   }
   
   else if(actualSleepHours < idealSleepHours)
   {
     console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
   }
   
   else {
     console.log("Error, something went wrong. Check your code.");
   } 
   }; 
   
   calculateSleepDebt();