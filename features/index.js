const { getFeatureState } = require("./feature-utils");

/* getFeatureState("extended-summary").then(function (isEnabled) {
  if (isEnabled) {
    // showExtendedSummary();
    console.log("Showing Extended Summary");
  } else {
    // showBriefSummary();
    console.log("Showing Brief Summary");
  }
}); */

getFeatureState("feedback-dialog").then(function (isEnabled) {
  if (isEnabled) {
    // showExtendedSummary();
    console.log("Showing Extended Summary");
  } else {
    // showBriefSummary();
    console.log("Showing Brief Summary");
  }
});
