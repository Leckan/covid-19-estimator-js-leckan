const chain = ({});
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
        
  return estimator({
    data,
    impact: {},
    severeimpact: {}
  });
};

export default covid19ImpactEstimator;
