const {By, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test(){
    let driver = await new Builder().forBrowser("chrome").build();
await driver.get("http://localhost:3000/login");
await driver.findElement(By.name("username")).sendKeys("admin");
await driver.findElement(By.name("password")).sendKeys("P@ssw0rd");
await driver.findElement(By.tagName("button")).click();
await driver.get("http://localhost:3000/hotels");
}