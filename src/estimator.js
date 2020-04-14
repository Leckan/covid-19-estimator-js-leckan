const covid19ImpactEstimator = (data) => {
  let estimateDays;
  if (data.periodType === 'days') {
    estimateDays = data.timeToElapse;
  } else if (data.periodType === 'weeks') {
    estimateDays = data.timeToElapse * 7;
  } else if (data.periodType === 'months') {
    estimateDays = data.timeToElapse * 30;
  }
  const setOfDays = Math.floor(estimateDays / 3);
  // Challenge 1 constants
  const infected = data.reportedCases * 10;
  const periodInfected = infected * (2 ** setOfDays);
  const severeInfected = data.reportedCases * 50;
  const severePeriodInfected = severeInfected * (2 ** setOfDays);
  // Challenge 2 constants
  const periodCases = Math.floor(periodInfected * (15 / 100));
  const severePeriodCases = Math.floor(severePeriodInfected * (15 / 100));
  const beds = Math.floor((data.totalHospitalBeds * (35 / 100)) - periodCases);
  const severeBeds = Math.floor((data.totalHospitalBeds * (35 / 100)) - severePeriodCases);
  // Challenge 3 constants

  const impact = {
    currentlyInfected: infected,
    infectionsByRequestedTime: periodInfected,
    severeCasesByRequestedTime: periodCases,
    hospitalBedsByRequestedTime: beds,
    casesForICUByRequestedTime: 0,
    casesForVentilatorsByRequestedTime: 0,
    dolarsInflight: 0
  };
  const severeImpact = {
    currentlyInfected: severeInfected,
    infectionsByRequestedTime: severePeriodInfected,
    severeCasesByRequestedTime: severePeriodCases,
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
