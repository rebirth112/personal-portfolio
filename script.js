let actualPage = document.getElementById("realpage");
let entrance = document.getElementById("enter");
let loadingButton = document.getElementById("loading-button");
actualPage.style.display = "none";

function setZoom() { 
    var scale = 'scale(1)';
    document.body.style.webkitTransform =  scale;    
    document.body.style.msTransform =   scale;
    document.body.style.transform = scale;
}

let i = 0;
function loader() {
    if (i==0) {
        i = 1;
        let width = 1;
        let id = setInterval(frame, 15);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                setTimeout(() => {
                    entrance.remove();
                    actualPage.style.display = "block";
                }, 800);

            } else {
                width++;
                loadingButton.style.width = width + "%"
                loadingButton.innerHTML = width + "%"
            }
        }
    }

}

setZoom();
loader();
