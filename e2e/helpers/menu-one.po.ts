import { browser, by, element, ExpectedConditions } from 'protractor';

const DEFAULT_TIMEOUT = 1000;

export class MenuOne {
  async getInputSignalCount(): Promise<number> {
    const numberOfElements = await element.all(by.className('output-signal'));
    return numberOfElements.length;
  }

  async openExampleNetsDialog(): Promise<void> {
      const button = element(by.id('exampleNetsDialogButton'));
      await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
      await button.click();
  }

  async openAddSignalsDialog(): Promise<void> {
    const button = element(by.id('addSignalsDialogButton'));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }

  async clickAddSignalsButton(): Promise<void> {
    const button = element(by.id('addSignalButton'));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }

  async clickRemoveSignalsButton(): Promise<void> {
    const button = element(by.id('removeSignalButton'));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }

  async selectNthExampleNet(index: number): Promise<void> {
    const button = element(by.id(`exampleNet-${index}`));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }

  async checkIfExampleNetsDialogIsOpened(): Promise<void> {
    const title = element(by.id('exampleNetDialogTitle'));
    await browser.wait(ExpectedConditions.presenceOf(title), DEFAULT_TIMEOUT);
  }

  async checkIfExampleNetsDialogIsClosed(): Promise<void> {
    const title = element(by.id('exampleNetDialogTitle'));
    await browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(title)), DEFAULT_TIMEOUT);
  }
}
