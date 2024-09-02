

const options = ["wall hacking", "speed hacking", "ass hacking", "wall hacking", "speed hacking", "ass hacking"]
const has_premium_features = true;



function playClickSound() {

    var audio = new Audio("./assets/click_1.wav");

    audio.oncanplaythrough = function () {
        audio.play();
    }


    audio.onended = function () {
        
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tabby-tab > input").forEach(e => {
        console.log(e)
        e.onclick = playClickSound;
    }
    )
})


window.showVipPrompt = function () {

    setTimeout(async () => {
        const inputValue = "YOUR_KEY_HERE";
        const { value: ipAddress } = await Swal.fire({
            title: "Enter your LICENSE KEY address",
            input: "text",
            inputLabel: "YOUR KEY",
            inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "You need to write something!";
                }
            }
        }).then(async (result) => {
            if (result.isConfirmed && result.value) {
                const o = await Swal.fire(`MAKE REQUEST WITH THE KEY: ` + result.value);
                setTimeout(() => {
                    //open_menu();

                }, 100)
            } else if (result.dismiss === Swal.DismissReason.cancel || result.dismiss === Swal.DismissReason.backdrop) {
                setTimeout(() => {
                    //open_menu();

                }, 100)
            }
        });

    }, 100)


}



//open_menu();
