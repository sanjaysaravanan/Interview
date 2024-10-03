const { fetchAllFeatures } = require("./feature-apis");

var features = {};

const loadFeatures = async () => {
  // check for the localstorage
  const storageValues = localStorage.getItem("features");

  if (storageValues) {
    features = JSON.parse(storageValues);
  } else {
    try {
      const apiFeatures = await fetchAllFeatures();
      features = apiFeatures;
      localStorage.setItem("features", JSON.stringify(apiFeatures));
    } catch (e) {
      console.error("Error Occured while Fetching features", e);
      alert("Unable to load the Features, Try after sometime");
    }
  }
};

// override the featureName val in the browser
const loadFeature = (featureName, val) => {
  features[featureName] = val;

  localStorage.setItem("features", JSON.stringify(features));
  /* if (storageValues) {
    features[featureName] = val;
  } else {
    localStorage.setItem(
      "features",
      JSON.stringify({
        [featureName]: val,
      })
    );
  } */
};

loadFeatures();

module.exports = {
  features,
  loadFeature,
};
