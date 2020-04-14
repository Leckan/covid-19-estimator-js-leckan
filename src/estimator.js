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
  // Challenge 2 constants
  const theSevereCasesByRequestedTime = Math.floor(15 / 100 * theInfectionsByRequestedTime);
  const theSevereCasesByRequestedTimeForSevere = Math.floor(15 / 100 * severeInfectionsByRequestedTime);
  const theHospitalBedsByRequestedTime = Math.floor((35 / 100 * data.totalHospitalBeds) - theSevereCasesByRequestedTime);
  const severeHospitalBedsByRequestedTime = Math.floor((35 / 100 * data.totalHospitalBeds) - theSevereCasesByRequestedTimeForSevere);
  const impact = {
    currentlyInfected: theCurrentlyInfected,
    infectionsByRequestedTime: theInfectionsByRequestedTime,
    severeCasesByrequestedTime: theSevereCasesByRequestedTime,
    hospitalBedsByRequestedTime: theHospitalBedsByRequestedTime,
    casesForICUByRequestedTime: 0,
    casesForVentilatorsByRequestedTime: 0,
    dolarsInflight: 0
  };
  const severeImpact = {
    currentlyInfected: severeCurrentlyInfected,
    infectionsByRequestedTime: severeInfectionsByRequestedTime,
    severeCasesByrequestedTime: theSevereCasesByRequestedTimeForSevere,
    hospitalBedsByRequestedTime: severeHospitalBedsByRequestedTime,
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
