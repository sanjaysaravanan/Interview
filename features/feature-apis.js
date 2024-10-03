// returns the state of *all* features for current user
function fetchAllFeatures() {
  // in reality, this would have been a `fetch` call:
  // `fetch("/api/features/all")`
  return new Promise((resolve) => {
    const sampleFeatures = {
      "extended-summary": true,
      "feedback-dialog": false,
    };
    setTimeout(resolve, 100, sampleFeatures);
  });
}

module.exports = {
  fetchAllFeatures,
};
