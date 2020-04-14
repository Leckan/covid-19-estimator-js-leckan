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
  const infected = data.reportedCases * 10;
  const periodInfected = infected * (2 ** setOfDays);
  const severeInfected = data.reportedCases * 50;
  const severePeriodInfected = severeInfected * (2 ** setOfDays);
  // Challenge 2 constants
  const periodCases = Math.floor((15 / 100) * periodInfected);
  const severePeriodCases = Math.floor((15 / 100) * severePeriodInfected);
  const beds = Math.floor(((35 / 100) * data.totalHospitalBeds) - periodCases);
  const severeBeds = Math.floor(((35 / 100) * data.totalHospitalBeds) - severePeriodCases);
  // Challenge 3 constants

  const impact = {
    currentlyInfected: infected,
    infectionsByRequestedTime: periodInfected,
    severeCasesByrequestedTime: periodCases,
    hospitalBedsByRequestedTime: beds,
    casesForICUByRequestedTime: 0,
    casesForVentilatorsByRequestedTime: 0,
    dolarsInflight: 0
  };
  const severeImpact = {
    currentlyInfected: severeInfected,
    infectionsByRequestedTime: severePeriodInfected,
    severeCasesByrequestedTime: severePeriodCases,
    hospitalBedsByRequestedTime: severeBeds,
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
