const covid19ImpactEstimator = (data) => {
  let estimateTime;
  if(data.periodType ==='days') {
    estimateTime = data.timeToElapse;
  }
  else if (data.periodType ==='weeks') {
    estimateTime = data.timeToElapse * 7;
  }
  else if (data.periodType ==='months') {
    estimateTime = data.timeToElapse * 30;
  }
  const setOfDays = Math.floor(estimateTime / 3);
  const currentlyInfected = data.reportedCases * 10;
  const severeCurrentlyInfected = data.reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * (2 ** setOfDays);
  const severeInfectionsByRequestedTime = severeCurrentlyInfected * (2 ** setOfDays);
  const input = data;

  return {
    data: input,
    impact: {
      currentlyInfected,
      infectionsByRequestedTime
    },
    severeimpact: {
      severeCurrentlyInfected,
      severeInfectionsByRequestedTime
    }};
};

export default covid19ImpactEstimator;
