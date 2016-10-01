/// <reference path="../typings/index.d.ts" />

const lighthouse = require('../../lighthouse-core');

export default function ListAudits() {
  const audits = lighthouse.getAuditList().map(i => i.replace(/\.js$/, ''));

  process.stdout.write(JSON.stringify({audits}, null, 2));
  process.exit(0);
}
