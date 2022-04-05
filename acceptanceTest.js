const { remote } = require('webdriverio');
const assert = require('assert');

let browser;;
(async() => {
    browser = await remote({
        capabilities: { browserName: 'chrome' }
    })

    await browser.navigateTo('https://mybmi-calculator.herokuapp.com/')

    const fNameInput = await browser.$('#rname')
    await fNameInput.setValue('Joseph')

    const lNameInput = await browser.$('#lname')
    await lNameInput.setValue('Mascot')

    const heightInput = await browser.$('#height')
    await heightInput.setValue('7')

    const weightInput = await browser.$('#weight')
    await weightInput.setValue('65')

    const calculateBtn = await browser.$('#calculateBtn')
    await calculateBtn.click()


    const pageTitle = await browser.getTitle();

    assert(pageTitle === 'amazon.com : Testing Book');
    await browser.deleteSession();

})().catch((err) => {
    console.error(err);
    return browser.deleteSession();
})