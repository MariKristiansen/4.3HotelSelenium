const {By, Key, until, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.name("username")).sendKeys("admin");
    await driver.findElement(By.name("password")).sendKeys("P@ssw0rd");
    //await driver.findElement(By.tagName("button")).click();
    await driver.findElement(By.name("addHotel")).click();

    await driver.get("http://localhost:3000/hotels");
    const rows = await driver.findElements(By.className("row"));
    console.log(rows.length);
}
test();