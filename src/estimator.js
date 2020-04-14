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
  const periodCases = Math.floor(0.15 * periodInfected);
  const severePeriodCases = Math.floor(0.15 * severePeriodInfected);
  const beds = Math.ceil(0.35 * data.totalHospitalBeds) - Math.ceil(0.15 * periodInfected);
  const severeBeds = Math.ceil(0.35 * data.totalHospitalBeds) - Math.ceil(0.15 * severePeriodInfected);
  // Challenge 3 constants
  const icu = Math.floor(0.05 * periodInfected);
  const severeIcu = Math.floor(0.05 * severePeriodInfected);
  const vent = Math.floor(0.02 * periodInfected);
  const severeVent = Math.floor(0.02 * severePeriodInfected);
  const avgDollar = data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation;
  const dollars = Math.floor((periodInfected * avgDollar) / estimateDays);
  const severeDollars = Math.floor((severePeriodInfected * avgDollar) / estimateDays);
  const impact = {
    currentlyInfected: infected,
    infectionsByRequestedTime: periodInfected,
    severeCasesByRequestedTime: periodCases,
    hospitalBedsByRequestedTime: beds,
    casesForICUByRequestedTime: icu,
    casesForVentilatorsByRequestedTime: vent,
    dollarsInFlight: dollars
  };
  const severeImpact = {
    currentlyInfected: severeInfected,
    infectionsByRequestedTime: severePeriodInfected,
    severeCasesByRequestedTime: severePeriodCases,
    hospitalBedsByRequestedTime: severeBeds,
    casesForICUByRequestedTime: severeIcu,
    casesForVentilatorsByRequestedTime: severeVent,
    dollarsInFlight: severeDollars
  };
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
