const CONFIG = {
  dataTab: 'DASH_DATA',
  cacheSeconds: 55,
  maxRows: 5000,
};

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Pktsg10 Dashboard');
}

function getDashboardPayload() {
  const cache = CacheService.getScriptCache();
  const cacheKey = 'pktsg10-dashboard-payload-v1';
  const cached = cache.get(cacheKey);
  if (cached) return JSON.parse(cached);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.dataTab);
  if (!sheet) throw new Error('Missing required tab: ' + CONFIG.dataTab);
  const values = sheet.getDataRange().getDisplayValues();
  if (!values.length) throw new Error('The dashboard data tab is empty.');
  const headers = values.shift().map(String);
  const rows = values.slice(0, CONFIG.maxRows).map(row => {
    const item = {};
    headers.forEach((header, index) => item[header] = row[index] ?? '');
    return item;
  });
  const payload = {schemaVersion:'1.0', generatedAt:new Date().toISOString(), sourceTab:CONFIG.dataTab, rows, quality:{status:'ok', warnings:[]}};
  cache.put(cacheKey, JSON.stringify(payload), CONFIG.cacheSeconds);
  return payload;
}

function invalidateDashboardCache() { CacheService.getScriptCache().remove('pktsg10-dashboard-payload-v1'); }
function onEdit(e) { invalidateDashboardCache(); }
