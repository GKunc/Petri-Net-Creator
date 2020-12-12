import { Board } from './../helpers/board.po';
import { MenuOne } from './../helpers/menu-one.po';
import { AppPage } from '../helpers/app.po';
import { browser, logging } from 'protractor';

describe('Build Net', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to between side menus', async () => {
    page.navigateTo();
    const menuOne = new MenuOne();
    await page.navigateToSimulateNetMenu();
    expect(await page.getHeaderTextOfSideMenu()).toEqual('Sim');
    await browser.sleep(500);

    await page.navigateToMinimizeNetMenu();
    expect(await page.getHeaderTextOfSideMenu()).toEqual('Net');
    await browser.sleep(500);

    await page.navigateToBuildNetMenu();
    expect(await page.getHeaderTextOfSideMenu()).toEqual('Create');
    await browser.sleep(500);
  });

  it('should create first example net and verify it', async () => {
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
  });

  it('should create second example net and verify it', async () => {
    page.navigateTo();
    const board = new Board();
    const menuOne = new MenuOne();

    await menuOne.openExampleNetsDialog();
    await menuOne.checkIfExampleNetsDialogIsOpened();
    await menuOne.selectNthExampleNet(2);
    await menuOne.checkIfExampleNetsDialogIsClosed();
    await browser.sleep(500);

    expect(await board.getAllTransitionsCount()).toEqual(2);
    expect(await board.getAllPlacesCount()).toEqual(4);
  });

  it('should create third example net and verify it', async () => {
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
  });

  it('should add and remove signals in modal', async () => {
    page.navigateTo();
    const menuOne = new MenuOne();
    await menuOne.openExampleNetsDialog();
    await menuOne.checkIfExampleNetsDialogIsOpened();
    await menuOne.selectNthExampleNet(2);
    await menuOne.checkIfExampleNetsDialogIsClosed();
    await browser.sleep(500);

    await menuOne.openAddSignalsDialog();
    let numberOfInputSignals = await menuOne.getInputSignalCount();
    expect(numberOfInputSignals).toEqual(3);

    await menuOne.clickAddSignalsButton();
    numberOfInputSignals = await menuOne.getInputSignalCount();
    expect(numberOfInputSignals).toEqual(4);

    await menuOne.clickAddSignalsButton();
    numberOfInputSignals = await menuOne.getInputSignalCount();
    expect(numberOfInputSignals).toEqual(5);

    await menuOne.clickRemoveSignalsButton();
    numberOfInputSignals = await menuOne.getInputSignalCount();
    expect(numberOfInputSignals).toEqual(4);
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
