import fs from 'fs';
import {
  getOperatingSystem,
  getProcessorArchitecture,
  getCpuCores,
  getTotalRam,
  getFreeRam
} from './os-module.js';

const osInfo = {
  operatingSystem: getOperatingSystem(),
  processorArchitecture: getProcessorArchitecture(),
  cpuCores: getCpuCores(),
  totalRam: getTotalRam(),
  freeRam: getFreeRam()
};

const osInfoText = `
Операційна система: ${osInfo.operatingSystem}
Архітектура процесора: ${osInfo.processorArchitecture}
Кількість ядер процесора: ${osInfo.cpuCores}
Загальна кількість RAM: ${osInfo.totalRam} ГБ
Кількість вільної RAM: ${osInfo.freeRam} ГБ
`;

fs.writeFile('output.txt', osInfoText, (err) => {
  if (err) {
    console.error('Помилка запису у файл:', err);
  } else {
    console.log('Інформація успішно записана у файл output.txt');
  }
});
