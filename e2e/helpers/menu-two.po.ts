import { browser, by, element, ExpectedConditions } from 'protractor';

const DEFAULT_TIMEOUT = 1000;

export class MenuTwo {
  async startSimulation(): Promise<void> {
    const button = element(by.id('startSimulationButton'));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }

  async autoSimulation(): Promise<void> {
    const button = element(by.id('autoSimulationButton'));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }

  async runRandomTransition(): Promise<void> {
    const button = element(by.id('runRandomTransitionButton'));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }

  async stopAutoSimulationTransition(): Promise<void> {
    const button = element(by.id('stopAutoSimulationButton'));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }

  async resetSimulation(): Promise<void> {
    const button = element(by.id('resetSimulationButton'));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }

  async previousStep(): Promise<void> {
    const button = element(by.id('previousStepButton'));
    await browser.wait(ExpectedConditions.elementToBeClickable(button), DEFAULT_TIMEOUT);
    await button.click();
  }
}
