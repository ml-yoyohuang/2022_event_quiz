/* eslint no-return-assign: 0 */
/**
 * @jest-environment node
 */
import puppeteer, { Browser, Page } from 'puppeteer';

const WEB_URL = 'http://localhost:3000';


let browser:Browser;
let page:Page;
beforeAll(async () => {
  browser = await puppeteer.launch(
    {
      headless: false,
      // headless: true,
      slowMo: 20,
      defaultViewport: {
        width: 1440,
        height: 900,
        isMobile: false,
      },
    },
  );
  page = await browser.newPage();
});
afterAll(() => {
  browser.close();
});

describe('FormExample', () => {
  test('/form Post', async () => {
    await page.goto(WEB_URL);
    await page.waitForSelector('#app');

    // input 輸入文字
    await page.type('#input-name', 'milkmidi');
    /*
    // 換成這樣寫也可以
    await page.focus('#input-name');
    await page.keyboard.type('milkmidi');
    // */

    await page.type('#input-email', 'milkmidi@gmail.com');

    // select 下拉選單
    await page.select('#select-country', '2');

    // checkbox, radiobutton
    await page.click('#radio-gender-0');
    await page.click('#checkbox-skill-0');
    await page.click('#checkbox-skill-1');

    // 等待 api response
    const [apiResponse] = Promise.all([
      page.waitForResponse(`${WEB_URL}/api/formData`).then((response) => response.json()),
      page.click('#button-submit'),
    ]);

    expect(apiResponse.status).toBe('ok');
  }, 10000);
});
