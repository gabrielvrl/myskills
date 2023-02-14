describe('My first E2E test suite', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {

    await expect(element(by.id('welcome'))).toBeVisible();
  });
});