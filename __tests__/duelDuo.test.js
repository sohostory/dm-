const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("page loads with id=choices after Draw button is clicked", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.id("choices"));
  });

  test("page loads with id=player-duo after 'Add to Duo' button is clicked", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.id("choices"));
    await driver.findElement(By.css("#choices div button")).click();
    await driver.findElement(By.id("player-duo"));
  });

  test("the card goes back to the draw section after removal", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.id("choices"));
    await driver.findElement(By.css("#choices div button")).click();
    await driver.findElement(By.id("player-duo"));
    await driver.findElement(By.css("#player-duo div button")).click();
    const cards = await driver.findElements(By.css("#choices div"));
    expect(cards.length).toEqual(5);
  });
});
