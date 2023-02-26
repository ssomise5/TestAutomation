beforeEach(() => {
   // browser.reloadSession();
    browser.maximizeWindow();
})
describe("Login Module",function(){
    it("Login with valid credentials",async () =>{

        browser.maxi
        const email=$("//*[@formcontrolname='username']")
        const password=$("//*[@formcontrolname='password']")
        const btnSignIn=$("//*[@type='submit']")
        const txtUserName=$("//*[text()='Test User 1']")
        await email.setValue("draxtest1@evifile.com")
        await password.setValue("DraxTest!1")
        await btnSignIn.click();
        browser.pause(3000)
        do {
			browser.pause(4000);
			console.log("***************************The Page is Loading***************************");
			console.log(browser.execute("return document.readyState"));
		} while (
			!browser.execute(function () {
				return document.readyState == "complete";
			})
		);
       txtUserName.click();
    })
})

//draxtest1@evifile.com/DraxTest!1