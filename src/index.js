import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

// Import and init Sentry SDK
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
	//   dsn: "https://c9a3069b7c8315c5860017348ae5bfe4@o4507427991060480.ingest.us.sentry.io/4507440333717504",
	dsn: "https://7253f49de05238952fa822294ad5e0cb@o4507456214204416.ingest.us.sentry.io/4507456224559104",
	integrations: [
		Sentry.browserTracingIntegration(),
		Sentry.replayIntegration(),
		Sentry.metrics.metricsAggregatorIntegration(),
	],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	tracesSampleRate: 1.0,
	tracePropagationTargets: ["localhost"],

	// Capture Replay for 10% of all sessions,
	// plus for 100% of sessions with an error
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
