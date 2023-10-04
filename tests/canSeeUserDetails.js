const {By, Key, Builder} = require('selenium-webdriver');
require('chromedriver');

async function test() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.name("username")).sendKeys("admin");
    await driver.findElement(By.name("password")).sendKeys("P@ssw0rd");
    await driver.findElement(By.tagName("button")).click();
    
    await driver.get("http://localhost:3000/users/1");
    var name = await driver.findElement(By.name("user")).getText();
    console.log('User name is:', name);
    await driver.quit();
}

test()