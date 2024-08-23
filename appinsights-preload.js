let appInsights = require('applicationinsights');

require('dotenv').config();

let applicationInsightsTelemetryClient;

if (!applicationInsightsTelemetryClient) {
  appInsights
    .setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING)
    .setAutoCollectConsole(true)
    // .setAutoCollectDependencies(true)
    .setAutoCollectExceptions(true)
    // .setAutoCollectHeartbeat(true)
    // .setAutoCollectPerformance(true, true)
    // .setAutoCollectRequests(true)
    // .setAutoDependencyCorrelation(true)
    // .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C)
    // .setSendLiveMetrics(true)
    // .setUseDiskRetryCaching(true);
    .start();

  applicationInsightsTelemetryClient = new appInsights.TelemetryClient();
}

module.exports = { applicationInsightsTelemetryClient };
