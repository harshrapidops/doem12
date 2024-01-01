const pkg = require('../package.json');
const currentVersion = (process && process.version) || null;
const rawRequiredVersion = (pkg && pkg.engines && pkg.engines.node) || null;
const requiredVersion = rawRequiredVersion ? 'v' + rawRequiredVersion : rawRequiredVersion;
const isVersionValid = !!currentVersion && !!requiredVersion && (currentVersion === requiredVersion);

// Validates current the NodeJS version compatibility when Kibana starts.
if (!isVersionValid) {
  // Actions to apply when validation fails: error report + exit.
  console.error(`HT-API does not support the current Node.JS version ${currentVersion}. Please use Node.Js ${requiredVersion}`);
  process.exit(1);
}
