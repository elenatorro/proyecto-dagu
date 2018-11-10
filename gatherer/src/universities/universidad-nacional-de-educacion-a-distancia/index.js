const puppeteer = require('puppeteer');
const universities = require('../constants/universities');
const name = 'universidad-nacional-de-educacion-a-distancia';

async function init() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(universities[name].url);

  browser.close();
}

init();