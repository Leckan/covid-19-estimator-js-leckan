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
  const periodCases = Math.floor(periodInfected * 0.15);
  const severePeriodCases = Math.floor(severePeriodInfected * 0.15);
  const beds = Math.round((data.totalHospitalBeds * 0.35) - (periodInfected * 0.15));
  const severeBeds = Math.round((data.totalHospitalBeds * 0.35) - (severePeriodInfected * 0.15));
  // Challenge 3 constants
  const icu = Math.floor(periodInfected * 0.05);
  const severeIcu = Math.floor(severePeriodInfected * 0.05);
  const vent = Math.floor(periodInfected * 0.02);
  const severeVent = Math.floor(severePeriodInfected * 0.02);
  const avgDollar = data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation;
  const dollars = Math.floor(periodInfected * avgDollar * estimateDays);
  const severeDollars = Math.floor(severePeriodInfected * avgDollar * estimateDays);
  const impact = {
    currentlyInfected: infected,
    infectionsByRequestedTime: periodInfected,
    severeCasesByRequestedTime: periodCases,
    hospitalBedsByRequestedTime: beds,
    casesForICUByRequestedTime: icu,
    casesForVentilatorsByRequestedTime: vent,
    dolarsInflight: dollars
  };
  const severeImpact = {
    currentlyInfected: severeInfected,
    infectionsByRequestedTime: severePeriodInfected,
    severeCasesByRequestedTime: severePeriodCases,
    hospitalBedsByRequestedTime: severeBeds,
    casesForICUByRequestedTime: severeIcu,
    casesForVentilatorsByRequestedTime: severeVent,
    dolarsInflight: severeDollars
  };
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
