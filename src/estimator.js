const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeimpact = {};
  let estimateTime;
  if (data.periodType === 'days') {
    estimateTime = data.timeToElapse;
  } else if (data.periodType === 'weeks') {
    estimateTime = data.timeToElapse * 7;
  } else if (data.periodType === 'months') {
    estimateTime = data.timeToElapse * 30;
  }
  const setOfDays = Math.floor(estimateTime / 3);
  impact.currentlyInfected = data.reportedCases * 10;
  severeimpact.currentlyInfected = data.reportedCases * 50;
  impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** setOfDays);
  severeimpact.infectionsByRequestedTime = severeimpact.currentlyInfected * (2 ** setOfDays);

  return {
    data,
    impact,
    severeimpact
  };
};

export default covid19ImpactEstimator;
