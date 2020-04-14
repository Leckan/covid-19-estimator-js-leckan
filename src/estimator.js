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
  // Challenge 1 constants
  const theCurrentlyInfected = data.reportedCases * 10;
  const theInfectionsByRequestedTime = theCurrentlyInfected * (2 ** setOfDays);
  const severeCurrentlyInfected = data.reportedCases * 50;
  const severeInfectionsByRequestedTime = severeCurrentlyInfected * (2 ** setOfDays);
  const impact = {
    currentlyInfected: theCurrentlyInfected,
    infectionsByRequestedTime: theInfectionsByRequestedTime,
    severeCasesByrequestedTime: 0,
    hospitalBedsByRequestedTime: 0,
    casesForICUByRequestedTime: 0,
    casesForVentilatorsByRequestedTime: 0,
    dolarsInflight: 0
  };
  const severeImpact = {
    currentlyInfected: severeCurrentlyInfected,
    infectionsByRequestedTime: severeInfectionsByRequestedTime,
    severeCasesByrequestedTime: 0,
    hospitalBedsByRequestedTime: 0,
    casesForICUByRequestedTime: 0,
    casesForVentilatorsByRequestedTime: 0,
    dolarsInflight: 0
  };
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
