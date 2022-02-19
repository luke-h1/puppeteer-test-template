import assert from "assert";
import Puppeteer, { Page } from "puppeteer";
import { Browser } from "puppeteer";

let browser: Browser | null = null;
let page: Page | null = null;

beforeAll(async () => {
  browser = await Puppeteer.launch({
    headless: true,
    waitForInitialPage: true,
    defaultViewport: {
      height: 1200,
      width: 1290,
      deviceScaleFactor: 0.75,
    },
  });
  console.log(`tests running in env: ${process.env.environment}`);
});

describe("dummy", () => {
  test("a dummy test", async () => {
    const page = await browser.newPage();
    await page.goto("https://www.google.com");

    const text = "hello";
    assert(text === "hello");
  });

  afterAll(async () => {
    await browser.close();
  });
});
