function resizeXterm() {

    let containerFluid = document.getElementByClassName("container-fluid");
    let contentBody = document.getElementById("content-body");
    let termDiv = document.getElementById("terminal");
    let termContainer = document.getElementsByClassName("terminal-container");
    let xtermDiv = document.getElementsByClassName("xterm");
    let xtermViewport = document.getElementsByClassName("xterm-viewport");
    let xtermScreen = document.getElementsByClassName("xterm-screen");
    if (termDiv !== undefined && termDiv !== null) {
        let style="width:1920px;height=1080px;"
        containerFluid.style = style;
        contentBody.style = style;

        termContainer.style=style;
        xtermDiv.style=style;
        xtermViewport.style=style;
        xtermScreen.style=style;
    }
}

function resizeTest() {
    document.getElementById("outputDiv").innerText="222";
    document.getElementById("outputDivChrome").innerText="222";
    /*
    let testDiv = document.getElementById("testDiv");
    let style = "width:1920px;height=1080px;"
    testDiv.style = style;
    */
}
resizeTest();
