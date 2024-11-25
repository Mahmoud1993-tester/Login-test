const { test , expect } = require('@playwright/test');


test.describe('smoke test', ()=> {

    test.beforeEach(async({page})=>{
        await page.goto("/");
    })

    test('Login', async({page})=>{
        await page.locator("text=Form Authentication").click();
        await page.locator("#username").fill('tomsmith');
        await page.locator("#password").fill("SuperSecretPassword!");
        await page.locator('button:has-text("Login")').click();
        await page.locator('button.secondary, .button.secondary').click();
        await page.waitForTimeout(7000);
        console.log("Test done successfully");
        await page.close();
    })
      

})
