import pytest
import os
from appium import webdriver


@pytest.fixture(scope="function")
def driver():
    driver = webdriver.Remote(
        command_executor='http://0.0.0.0:4723/wd/hub',
        desired_capabilities={
            'app': os.path.expanduser(
                './android/app/build/outputs/apk/debug/app-debug.apk'),
            'platformName': 'Android',
            'deviceName': 'emulator-5554',
            'deviceModel': '7.1.1',
        })

    yield driver  # Test code runs after this line

    # Teardown
    driver.quit()