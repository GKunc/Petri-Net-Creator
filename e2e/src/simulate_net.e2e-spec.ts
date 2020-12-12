import { Board } from './../helpers/board.po';
import { MenuTwo } from './../helpers/menu-two.po';
import { MenuOne } from './../helpers/menu-one.po';
import { AppPage } from '../helpers/app.po';
import { browser, logging } from 'protractor';

describe('Simulate Net', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should create exmaple net and start simulation', async () => {
    page.navigateTo();
    const board = new Board();
    const menuOne = new MenuOne();

    await menuOne.openExampleNetsDialog();
    await menuOne.checkIfExampleNetsDialogIsOpened();
    await menuOne.selectNthExampleNet(1);
    await menuOne.checkIfExampleNetsDialogIsClosed();
    await browser.sleep(500);

    expect(await board.getAllTransitionsCount()).toEqual(2);
    expect(await board.getAllPlacesCount()).toEqual(4);

    const menuTwo = new MenuTwo();
    await page.navigateToSimulateNetMenu();
    await browser.sleep(500);
    await menuTwo.startSimulation();
    expect(await board.getNumberOfActiveTransitions()).toEqual(1);
    expect(await board.getAllTokensCount()).toEqual(1);
  });

  it('should create exmaple net and check if tokens are moved to output places', async () => {
    page.navigateTo();
    const board = new Board();
    const menuOne = new MenuOne();

    await menuOne.openExampleNetsDialog();
    await menuOne.checkIfExampleNetsDialogIsOpened();
    await menuOne.selectNthExampleNet(1);
    await menuOne.checkIfExampleNetsDialogIsClosed();
    await browser.sleep(500);

    expect(await board.getAllTransitionsCount()).toEqual(2);
    expect(await board.getAllPlacesCount()).toEqual(4);

    const menuTwo = new MenuTwo();
    await page.navigateToSimulateNetMenu();
    await browser.sleep(500);
    await menuTwo.startSimulation();
    expect(await board.getNumberOfActiveTransitions()).toEqual(1);
    expect(await board.getAllTokensCount()).toEqual(1);

    await menuTwo.runRandomTransition();
    await browser.sleep(500);
    expect(await board.getNumberOfActiveTransitions()).toEqual(1);
    expect(await board.getAllTokensCount()).toEqual(2);

    await menuTwo.runRandomTransition();
    await browser.sleep(500);
    expect(await board.getNumberOfActiveTransitions()).toEqual(0);
    expect(await board.getAllTokensCount()).toEqual(1);
  });

  it('should reset simulation', async () => {
    page.navigateTo();
    const board = new Board();
    const menuOne = new MenuOne();

    await menuOne.openExampleNetsDialog();
    await menuOne.checkIfExampleNetsDialogIsOpened();
    await menuOne.selectNthExampleNet(1);
    await menuOne.checkIfExampleNetsDialogIsClosed();
    await browser.sleep(500);

    expect(await board.getAllTransitionsCount()).toEqual(2);
    expect(await board.getAllPlacesCount()).toEqual(4);

    const menuTwo = new MenuTwo();
    await page.navigateToSimulateNetMenu();
    await browser.sleep(500);
    await menuTwo.startSimulation();
    expect(await board.getNumberOfActiveTransitions()).toEqual(1);
    expect(await board.getAllTokensCount()).toEqual(1);

    await menuTwo.runRandomTransition();
    await browser.sleep(500);
    expect(await board.getNumberOfActiveTransitions()).toEqual(1);
    expect(await board.getAllTokensCount()).toEqual(2);

    await menuTwo.resetSimulation();
    await browser.sleep(500);
    expect(await board.getNumberOfActiveTransitions()).toEqual(1);
    expect(await board.getAllTokensCount()).toEqual(1);
  });

  it('should run auto simulation', async () => {
    page.navigateTo();
    const board = new Board();
    const menuOne = new MenuOne();

    await menuOne.openExampleNetsDialog();
    await menuOne.checkIfExampleNetsDialogIsOpened();
    await menuOne.selectNthExampleNet(1);
    await menuOne.checkIfExampleNetsDialogIsClosed();
    await browser.sleep(500);

    expect(await board.getAllTransitionsCount()).toEqual(2);
    expect(await board.getAllPlacesCount()).toEqual(4);

    const menuTwo = new MenuTwo();
    await page.navigateToSimulateNetMenu();
    await browser.sleep(500);
    await menuTwo.autoSimulation();

    expect(await board.getNumberOfActiveTransitions()).toEqual(0);
    expect(await board.getAllTokensCount()).toEqual(1);
  });

  it('should undo last operation', async () => {
    page.navigateTo();
    const board = new Board();
    const menuOne = new MenuOne();

    await menuOne.openExampleNetsDialog();
    await menuOne.checkIfExampleNetsDialogIsOpened();
    await menuOne.selectNthExampleNet(1);
    await menuOne.checkIfExampleNetsDialogIsClosed();
    await browser.sleep(500);

    expect(await board.getAllTransitionsCount()).toEqual(2);
    expect(await board.getAllPlacesCount()).toEqual(4);

    const menuTwo = new MenuTwo();
    await page.navigateToSimulateNetMenu();
    await browser.sleep(500);
    await menuTwo.startSimulation();

    expect(await board.getNumberOfActiveTransitions()).toEqual(1);
    expect(await board.getAllTokensCount()).toEqual(1);

    await menuTwo.runRandomTransition();
    await browser.sleep(500);
    expect(await board.getNumberOfActiveTransitions()).toEqual(1);
    expect(await board.getAllTokensCount()).toEqual(2);

    await menuTwo.previousStep();
    expect(await board.getNumberOfActiveTransitions()).toEqual(1);
    expect(await board.getAllTokensCount()).toEqual(1);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
