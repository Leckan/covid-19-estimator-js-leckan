const chain = data;
const estimateCurrentlyInfected = data;
const estimateProjectedInfections = data;
const estimateSevereCases = data;
const estimateBedSpaceAvailability = data;
const estimateCasesForICU = data;
const estimateCasesForVentilators = data;
const estimateDollarsInFlight = data;

const covid19ImpactEstimator = (data) => {
    const estimator = chain(
        // challenge 1  
        estimateCurrentlyInfected,
        estimateProjectedInfections,
        // challenge 2
        estimateSevereCases,
        estimateBedSpaceAvailability,
        //challenge 3
        estimateCasesForICU,
        estimateCasesForVentilators,
        estimateDollarsInFlight);
        
    return estimator({
        data,
        impact: {},
        severeimpact: {}
    });
};

export default covid19ImpactEstimator;
