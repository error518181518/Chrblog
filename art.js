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
        <iframe src="merry chrismast30s.mp4" width="800px" height="600px" frameborder="500"></iframe><hr>

            <div class="intro" style="margin-left: 3vw;">
                <p>An arts with red tone colors... <br>
                    ... a hot color suitable for a Christmas Day!</p> <br>
            </div>
    </div> <br>
</div>
    `
}
    document.getElementById("all").style.display = "none";
    document.getElementById("bline").style.display = "none";
    document.getElementById("unl").style.display = "none";
}