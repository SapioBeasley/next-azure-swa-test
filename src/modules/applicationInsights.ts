import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const applicationInsights = new ApplicationInsights({
  config: {
    connectionString: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING,
  },
});

applicationInsights.loadAppInsights();

export default applicationInsights;
