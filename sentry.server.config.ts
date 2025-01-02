// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b14febefde9a19989a26452454e1ac4e@o4507669677211648.ingest.us.sentry.io/4508576029868032",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
