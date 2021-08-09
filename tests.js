
const puppeteer = require("puppeteer")
const mockData = require('./mock-data.json')

const url = "http://contractorsinsurancereview.com/ExampleForm/";

(async () => {
  const browser = await puppeteer.launch({ headless: true }) 
  const page = await browser.newPage();  
  await page.goto(url);
  await page.waitForSelector('form[action="thank-you.html"]');
  await page.type("#name", mockData.name);
  await page.type("#email", mockData.email);
  await page.type("#phone", mockData.phone);
  await page.type("#company", mockData.company);
  await page.select("select#employees", mockData.employees); 
  await page.screenshot({ path: "Screenshot.png" });
  await page.click('form[action="thank-you.html"] button');
  await page.waitForSelector(".thank-you");
  console.log('reached thank you page successfully!');
  
  await browser.close();
})()