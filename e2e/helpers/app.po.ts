import { browser, by, element, ExpectedConditions } from 'protractor';

const DEFAULT_TIMEOUT = 1000;

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  async getHeaderTextOfSideMenu(): Promise<string> {
    const header = await element(by.css('mat-step-header[aria-selected="true"]')).getText();
    return header.split('\n')[1];
  }

  async navigateToBuildNetMenu(): Promise<void> {
    const stepHeaders = element.all(by.css('mat-step-header'));
    await stepHeaders.get(0).click();
  }

  async navigateToSimulateNetMenu(): Promise<void> {
    const stepHeaders = element.all(by.css('mat-step-header'));
    await stepHeaders.get(1).click();
  }

  async navigateToMinimizeNetMenu(): Promise<void> {
    const stepHeaders = element.all(by.css('mat-step-header'));
    await stepHeaders.get(2).click();
  }
}
