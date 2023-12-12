// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define the mondayWork function as a function expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Define the wrapAdjective function
  function wrapAdjective(wrapper = "*") {
    // Return a function that takes an adjective and wraps it in the specified highlight
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    }
  };