import { browser, by, element, ExpectedConditions } from 'protractor';

const DEFAULT_TIMEOUT = 1000;

export class Board {
  async getAllTransitionsCount(): Promise<number> {
    return (await element.all(by.className('transition'))).length;
  }

  async getAllPlacesCount(): Promise<number> {
    return (await element.all(by.className('place'))).length;
  }

  async getAllTokensCount(): Promise<number> {
    return (await element.all(by.className('token'))).length;
  }

  async getNumberOfActiveTransitions(): Promise<number> {
    return (await element.all(by.className('ready-to-be-fired'))).length;
  }

  async getNumberOfSubnets(): Promise<number> {
    return (await element.all(by.className('border'))).length;
  }
}
