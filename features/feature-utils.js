const { features, loadFeature } = require("./store");

function getFeatureState(featureName) {
  if (features[featureName]) {
    return true;
  }

  // featureName is not present in the store
  loadFeature(featureName, false);
}

module.exports = {
  getFeatureState,
};
