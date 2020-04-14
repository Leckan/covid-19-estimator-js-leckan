const covid19ImpactEstimator = (data) => {
  let estimateTime;
  if (data.periodType === 'days') {
    estimateTime = data.timeToElapse;
  } else if (data.periodType === 'weeks') {
    estimateTime = data.timeToElapse * 7;
  } else if (data.periodType === 'months') {
    estimateTime = data.timeToElapse * 30;
  }
  const setOfDays = Math.floor(estimateTime / 3);
  const impact = {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: currentlyInfected * (2 ** setOfDays)
  };
  const severeImpact = {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: currentlyInfected * (2 ** setOfDays)
  };
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
