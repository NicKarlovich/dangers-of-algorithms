var caseB = document.getElementById("caseB-long");
var caseBIndicator = document.getElementById("caseB-long-indicator");
var caseBMonthTracker = "1 Month";

caseB.addEventListener('scroll', function() {
  let newScroll = ((caseB.scrollLeft / caseB.scrollWidth) * 60 + 1).toFixed(0);
  console.log(caseB.scrollLeft);
  console.log(caseB.scrollWidth);
  if (caseBMonthTracker !== newScroll) {
    caseBMonthTracker = newScroll;
    if (newScroll == 1) {
      caseBIndicator.innerHTML = newScroll + " Month";
    } else {
      caseBIndicator.innerHTML = newScroll + " Months";
    }
  }
})
