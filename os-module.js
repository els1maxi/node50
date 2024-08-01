import os from 'os';

function bytesToGigabytes(bytes) {
  return (bytes / (1024 ** 3)).toFixed(2); // конвертация гб с округлением до 2 
}

export function getOperatingSystem() {
  return os.type();
}

export function getProcessorArchitecture() {
  return os.arch();
}

export function getCpuCores() {
  return os.cpus().length;
}

export function getTotalRam() {
  return bytesToGigabytes(os.totalmem());
}

export function getFreeRam() {
  return bytesToGigabytes(os.freemem());
}
