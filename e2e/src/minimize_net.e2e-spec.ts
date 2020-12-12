import { MenuTwo } from './../helpers/menu-two.po';
import { MenuOne } from './../helpers/menu-one.po';
import { Board } from './../helpers/board.po';
import { MenuThree } from './../helpers/menu-three.po';
import { AppPage } from '../helpers/app.po';
import { browser, logging } from 'protractor';

describe('Minimize Net', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should show netMatrixDialog and close it', async () => {
    page.navigateTo();
    const board = new Board();
    const menuOne = new MenuOne();

    await menuOne.openExampleNetsDialog();
    await menuOne.checkIfExampleNetsDialogIsOpened();
    await menuOne.selectNthExampleNet(3);
    await menuOne.checkIfExampleNetsDialogIsClosed();
    await browser.sleep(500);

    expect(await board.getAllTransitionsCount()).toEqual(4);
    expect(await board.getAllPlacesCount()).toEqual(6);

    const menuThree = new MenuThree();
    await page.navigateToMinimizeNetMenu();

    await menuThree.showNetMatrix();
    await menuThree.checkIfShowNetMatrixDialogIsOpened();
    await menuThree.closeMinimizedNetDialog();
    await menuThree.checkIfShowNetMatrixDialogIsClosed();
  });

  it('should minimize net', async () => {
    page.navigateTo();
    const board = new Board();
    const menuOne = new MenuOne();

    await menuOne.openExampleNetsDialog();
    await menuOne.checkIfExampleNetsDialogIsOpened();
    await menuOne.selectNthExampleNet(3);
    await menuOne.checkIfExampleNetsDialogIsClosed();
    await browser.sleep(500);

    expect(await board.getAllTransitionsCount()).toEqual(4);
    expect(await board.getAllPlacesCount()).toEqual(6);

    const menuThree = new MenuThree();
    await page.navigateToMinimizeNetMenu();

    await menuThree.minimizeNet();
    expect(await board.getNumberOfSubnets()).toEqual(2);
    expect(await board.getAllPlacesCount()).toEqual(8);
    expect(await board.getAllTransitionsCount()).toEqual(4);
    expect(await board.getAllTokensCount()).toEqual(1);
  });

  it('should minimize net', async () => {
    page.navigateTo();
    const board = new Board();
    const menuOne = new MenuOne();

    await menuOne.openExampleNetsDialog();
    await menuOne.checkIfExampleNetsDialogIsOpened();
    await menuOne.selectNthExampleNet(3);
    await menuOne.checkIfExampleNetsDialogIsClosed();
    await browser.sleep(500);

    expect(await board.getAllTransitionsCount()).toEqual(4);
    expect(await board.getAllPlacesCount()).toEqual(6);

    const menuThree = new MenuThree();
    await page.navigateToMinimizeNetMenu();

    await menuThree.minimizeNet();
    expect(await board.getNumberOfSubnets()).toEqual(2);
    expect(await board.getAllPlacesCount()).toEqual(8);
    expect(await board.getAllTransitionsCount()).toEqual(4);
    expect(await board.getAllTokensCount()).toEqual(1);

    await menuThree.unminimizeNet();
    expect(await board.getAllTransitionsCount()).toEqual(4);
    expect(await board.getAllPlacesCount()).toEqual(6);
    expect(await board.getAllTokensCount()).toEqual(1);
  });

  it('should simulate minimized net', async () => {
    page.navigateTo();
    const board = new Board();
    const menuOne = new MenuOne();

    await menuOne.openExampleNetsDialog();
    await menuOne.checkIfExampleNetsDialogIsOpened();
    await menuOne.selectNthExampleNet(3);
    await menuOne.checkIfExampleNetsDialogIsClosed();
    await browser.sleep(500);

    expect(await board.getAllTransitionsCount()).toEqual(4);
    expect(await board.getAllPlacesCount()).toEqual(6);

    const menuThree = new MenuThree();
    await page.navigateToMinimizeNetMenu();

    await menuThree.minimizeNet();
    expect(await board.getNumberOfSubnets()).toEqual(2);
    expect(await board.getAllPlacesCount()).toEqual(8);
    expect(await board.getAllTransitionsCount()).toEqual(4);
    expect(await board.getAllTokensCount()).toEqual(1);

    const menuTwo = new MenuTwo();
    await page.navigateToSimulateNetMenu();
    await menuTwo.startSimulation();

    expect(await board.getNumberOfActiveTransitions()).toEqual(1);
    expect(await board.getAllTokensCount()).toEqual(1);

    await menuTwo.runRandomTransition();
    await browser.sleep(500);
    expect(await board.getNumberOfActiveTransitions()).toEqual(2);
    expect(await board.getAllTokensCount()).toEqual(4);

    await menuTwo.runRandomTransition();
    expect(await board.getNumberOfActiveTransitions()).toEqual(1);
    expect(await board.getAllTokensCount()).toEqual(4);

    await menuTwo.runRandomTransition();
    expect(await board.getNumberOfActiveTransitions()).toEqual(1);
    expect(await board.getAllTokensCount()).toEqual(4);

    await menuTwo.runRandomTransition();
    expect(await board.getNumberOfActiveTransitions()).toEqual(0);
    expect(await board.getAllTokensCount()).toEqual(1);
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
