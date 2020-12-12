import { browser, by, element, ExpectedConditions } from 'protractor';

const DEFAULT_TIMEOUT = 1000;

export class MenuThree {
  async showNetMatrix(): Promise<void> {
    const button = element(by.id('showNetMatrixButton'));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }

  async minimizeNet(): Promise<void> {
    const button = element(by.id('minimizeNetButton'));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }

  async unminimizeNet(): Promise<void> {
    const button = element(by.id('unminimizeNetButton'));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }

  async checkIfShowNetMatrixDialogIsOpened(): Promise<void> {
    const title = element(by.id('showNetMatrixDialogTitle'));
    await browser.wait(ExpectedConditions.presenceOf(title), DEFAULT_TIMEOUT);
  }

  async checkIfShowNetMatrixDialogIsClosed(): Promise<void> {
    const title = element(by.id('showNetMatrixDialogTitle'));
    await browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(title)), DEFAULT_TIMEOUT);
  }

  async closeMinimizedNetDialog(): Promise<void> {
    const button = element(by.id('closeNetMatrixDialog'));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }}
