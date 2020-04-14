const chain = (data) => {};
const estimateCurrentlyInfected = {};
const estimateProjectedInfections = {};
const estimateSevereCases = {};
const estimateBedSpaceAvailability = {};
const estimateCasesForICU = {};
const estimateCasesForVentilators = {};
const estimateDollarsInFlight = {};

const covid19ImpactEstimator = (data) => {
  const estimator = chain(
    // challenge 1
    estimateCurrentlyInfected,
    estimateProjectedInfections,
    // challenge 2
    estimateSevereCases,
    estimateBedSpaceAvailability,
    // challenge 3
    estimateCasesForICU,
    estimateCasesForVentilators,
    estimateDollarsInFlight
  );
  const impact = {
    currentlyInfected = data.reportedCases * 10,
    infectionsByRequestedTime = 55
  };
  const severeimpact = {
    currentlyInfected = data.reportedCases * 50,
    infectionsByRequestedTime = 55
  }
  return {
    data,
    impact,
    severeimpact};
};

export default covid19ImpactEstimator;
