import {expect, test } from "@playwright/test";

test('Get all the usernames resgistered', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox', {name: 'Username'}).fill('admin')
    await page.getByRole('textbox', {name: 'Password'}).fill('admin123')
    await page.getByRole('button', {name: 'Login'}).click()
    
    await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible

    await page.getByRole('link', {name: 'Admin'}).click()

    await page.getByRole('navigation', {name: 'Topbar menu'}).getByText('User Management').click()
    await page.getByRole('menuitem', {name: 'Users'}).click()

    const rows = page.getByRole('table').getByRole('row')
    const usernames: string[] = []
    const rowCount = await rows.count()

    for(let i = 1; i < rowCount; i++)
    {
        const cell = rows.nth(i).getByRole('cell').nth(1)
        const username = await cell.textContent()

        if(username)
        {
            usernames.push(username)
        }
    }

console.log(usernames)

})

test('Get all the EmployeeName resgistered', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox', {name: 'Username'}).fill('admin')
    await page.getByRole('textbox', {name: 'Password'}).fill('admin123')
    await page.getByRole('button', {name: 'Login'}).click()
    
    await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible

    await page.getByRole('link', {name: 'Admin'}).click()

    await page.getByRole('navigation', {name: 'Topbar menu'}).getByText('User Management').click()
    await page.getByRole('menuitem', {name: 'Users'}).click()

    const rows = page.getByRole('table').getByRole('row')
    const EmployeeNames: string[] = []
    const rowCount = await rows.count()

    for(let i = 1; i < rowCount; i++)
    {
        const cell = rows.nth(i).getByRole('cell').nth(3)
        const EmployeeName = await cell.textContent()

        if(EmployeeName)
        {
            EmployeeNames.push(EmployeeName.trim())
        }
    }

console.log(EmployeeNames)

})