let arts = [
    {
        name: "a01",
        time: 30,
    },

]

let getall = ()=>{
    let data = document.getElementById("showall")

for (i of arts) {

    data.innerHTML += `
    <div class="cont" style="width: 90%; margin: auto;">
        <!--intro down-->
        <iframe src="new year portrait.mp4" width="1000px" height="800px" frameborder="700"></iframe><hr>

            <div class="intro" style="margin-left: 1vw;">
                <p>How to shade =))... <br>
                    ... No smegzy guys</p> <br>
            </div>
    </div> <br>
</div>
    `
}
    document.getElementById("all").style.display = "none";
    document.getElementById("bline").style.display = "none";
    document.getElementById("unl").style.display = "none";
}