/// <reference path="../typings/index.d.ts" />

const lighthouse = require('../../lighthouse-core');

export default function listTraceCategories() {
  const traceCategories = lighthouse.traceCategories;

  process.stdout.write(JSON.stringify({traceCategories}));
  process.exit(0);
}
