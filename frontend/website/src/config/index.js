import configDev from './dev';

const environment = 'development';
const config = configDev;

console.log(`Environment selected: ${environment}`);
config.clientVersion = 521;

export default config;
