function mainHoverT() {

    document.getElementById("logoWhite").style.opacity = "0%";
    document.getElementById("logoPink").style.opacity = "100%";

}
function mainHoverF() {

    document.getElementById("logoWhite").style.opacity = "100%";
    document.getElementById("logoPink").style.opacity = "0%";

}
function buttonHoverT(element_) {

    element_.children[0].children[0].style.opacity = "0%";
    element_.children[0].children[1].style.opacity = "100%";

}
function buttonHoverF(element_) {

    element_.children[0].children[0].style.opacity = "100%";
    element_.children[0].children[1].style.opacity = "0%";

}
function fadeIn() {

    document.getElementById("fade").style.opacity = "100%";
    setTimeout(function() {document.getElementById("fade").style.opacity = "0%";}, 2000);

}
function fadeOut() {

    document.getElementById("fade").style.opacity = "0%";

}
function raiseBar() {

    document.getElementById("topBar").style.top = "-80px";
    setTimeout(function(){document.getElementById("topBar").style.top = "0px";}, 2000);


}
function lowerBar() {

    document.getElementById("topBar").style.top = "0px";

}
function goto(destination_) {

    fadeIn();
    raiseBar();
    setTimeout(function() {window.location.href = destination_;}, 1000);

}
function updateScroll() {

    document.getElementById("bgNebula").style.backgroundPositionY = "-" + (window.scrollY)/16 + "px";
    document.getElementById("bgStars1").style.backgroundPositionY = "-" + (window.scrollY)/8 + "px";
    document.getElementById("bgStars2").style.backgroundPositionY = "-" + (window.scrollY)/4 + "px";
    document.getElementById("bgStars3").style.backgroundPositionY = "-" + (window.scrollY)/2 + "px";

}
function fitAllChildren() {

    var toFit = document.getElementsByClassName("display");
    for (var a = 0; a < toFit.length; a++) {

        fitChildren(toFit[a]);

    }

}
function fitChildren(element_) {

    var children = element_.children;
    for (var a = 0; a < children.length; a++) {

        children[a].style.height = element_.style.height;

    }
    element_.style.width = 100 * children[0].width / document.documentElement.clientWidth  + "vw";

}

class imgSwap {
    
    element;
    childArray;
    childCount;
    current;

    constructor (el) {
        this.element = el;
        this.childArray = this.element.children;
        this.childCount = this.element.children.length;
        this.current = 0;
        this.setPic(0);
        setTimeout(() => {
            this.updatePic();
        }, Math.floor(Math.random() * 3001));
    }

    setPic (index) {
        for (let a = 0; a < this.childCount; a++) {
            if (a == index) {
                this.enable(a);
            }
            else {
                this.disable(a);
            }
        }
    }

    enable (index) {
        this.childArray[index].style.opacity = "100%";
    }

    disable (index) {
        this.childArray[index].style.opacity = "0%";
    }

    updatePic() {
        this.current++;
        if (this.current >= this.childCount) {
            this.current = 0;
        }
        this.setPic(this.current);
        setTimeout(() => {
            this.updatePic();
        }, Math.floor(Math.random() * 3001) + 3000);
    }

}
function createDisplays(allDisplays_) {

    var displays = document.getElementsByClassName("display");
    for (var a = 0; a < displays.length; a++) {

        allDisplays_[a] = new imgSwap(displays[a]);

    }

}


