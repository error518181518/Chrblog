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
        <iframe src="portrait05.mp4" width="800px" height="600px" frameborder="500"></iframe><hr>

            <div class="intro" style="margin-left: 3vw;">
                <p>An Portrait in black/white... <br>
                    ... Canvas size: 1200 x 1600</p> <br>
            </div>
    </div> <br>
</div>
    `
}
    document.getElementById("all").style.display = "none";
    document.getElementById("bline").style.display = "none";
    document.getElementById("unl").style.display = "none";
}