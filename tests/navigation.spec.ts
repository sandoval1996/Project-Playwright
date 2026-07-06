
import {test, expect} from '@playwright/test'

test('check left menu options', async({page})=>
{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.getByRole('textbox', {name: 'Username'}).fill('admin')
await page.getByRole('textbox', {name: 'Password'}).fill('admin123')
await page.getByRole('button', {name: 'Login'}).click()

await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible

const leftMenuItems = page.getByLabel('Sidepanel').getByRole('listitem')

const conteoMenu = await leftMenuItems.count()

console.log('Current menu items count', conteoMenu)

const numeromenu: string[] = []

for(let i=0; i<conteoMenu; i++)
{
    const menutexto = await leftMenuItems.nth(i).innerText()
    numeromenu.push(menutexto)
}

console.log(numeromenu)

const expectedMenuItems = 
[
    'Admin',
    'PIM',
    'Leave',
    'Time',
    'Recruitment',
    'My Info',
    'Performance',
    'Dashboard',
    'Directory',
    'Maintenance',
    'Claim',
    'Buzz'
]

expect(numeromenu).toEqual(expectedMenuItems)

})