var allItems = document.getElementsByClassName("showItem");

function toggleItem(id){
    var e = document.getElementById(id);
    if (e.style.display == 'block') {
        e.style.display = 'none';
    } else {
        e.style.display = 'block';
    }

    for(var i=0; i<allItems.length; i++){
        if(allItems[i].id != id){
            allItems[i].style.display = 'none';
        }
    }
}

//randomize background color on selection
const colors = ['#ff83a0', '#ffbf00', '#8eff4d', '#6effd8', '#6b98ff', '#e49eff', '#ffe96c', '#5affec'];
const hoverColorClasses = document.querySelectorAll('.hoverColor');

hoverColorClasses.forEach(function(hoverColor) {
    hoverColor.addEventListener('mouseover', function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.style.backgroundColor = randomColor;
    });
    
    hoverColor.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'transparent';
    });
});

