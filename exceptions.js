// try {
//   throw "A problem has occurred!";
//   console.log("Try!");
// } catch (error) {
//   console.log(error);
// }

function panicExceptAtLizars(text) {
  if (text == "lizard") {
    return true;
  } else {
    throw "ERROR: input must be a lizard";
  }
}

panicExceptAtLizars("frog");
