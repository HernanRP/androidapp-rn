def test_basic(driver):
    WAIT_SEC = 10
    driver.implicitly_wait(WAIT_SEC)

    elem = driver.find_element_by_accessibility_id('testview')

    assert elem is not None