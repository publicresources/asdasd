

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
        e.onclick = playClickSound;
    }
    )


  






})


window.TAB_INFO = "tab-info"
window.TAB_CHEATS = "tab-cheats"
window.TAB_LICENSE = "tab-license"
window.TAB_PREMIUM = "tab-license"

window.showVipPrompt = function () {

    setTimeout(async () => {
        const inputValue = "";
        const { value: ipAddress } = await Swal.fire({
            input: "text",
            title: "<div style='display:flex; align-items:center'><img width=32 src='./assets/cadeado.svg' > Premium License Checker</div></div>",
            html: "acesso vip coloque a chave para desbloquear a função.<br><div style='font-size: 0.6em; text-align: left'>Nota: este documento está protegido com criptografia de ponta qualquer alteração que mude o seu comportamento o aplicativo entrará em modo bloqueio de forma não reversivel.</div>",
            inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "You need to write something!";
                }
            }
        }).then(async (result) => {
            if (result.isConfirmed && result.value) {
                window.onLicenseKeyInput(result.value)
                setTimeout(() => {
                    //open_menu();

                }, 1)
            } else if (result.dismiss === Swal.DismissReason.cancel || result.dismiss === Swal.DismissReason.backdrop) {
                setTimeout(() => {
                    //open_menu();

                }, 1)
            }
        });

    }, 100)


}



window.onSwitchToggle =(element) =>{}


window.addSwitch = function (sw) {
    if (typeof (sw) == "string") {
        sw = JSON.parse(sw);
    }

    var text = sw.text || "";
    var description = sw.description || "";

    var id = sw.id || "checkbox-parent" + Date.now().toString() + Math.random();
    var checkboxId = "checkbox-" + id; // ID único para o checkbox

    

    document.getElementById(sw.tab || "tab-cheats").innerHTML += `
     <label class="inline-flex items-center cursor-pointer;" style="text-align: left;" id=${JSON.stringify(id)}>
        <input type="checkbox" value="" class="sr-only peer" style="outline: none; box-shadow: none;" id="${checkboxId}">
        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ms-3 text-sm font-medium text-white-300 focus:outline-none" style="display:flex; flex-direction: column">${text}
            <div style='font-size: 0.6em'>${description}</div>
        </span>
    </label>`;

    // Adiciona um event listener ao checkbox

    setTimeout(()=>{// run on next frame when the script is ok
        document.getElementById(checkboxId).addEventListener('change', function (event) {
            const element = event.target;
            element.identifier = id;
            window.onSwitchToggle(element)
        });
    },1)
   
}




window.breakline = function (tab) {
    document.getElementById(tab || "tab-cheats").innerHTML += `<br>`
}


window.addText = function (sw) {
    if (typeof (sw) == "string") {
        sw = JSON.parse(sw)
    }

    console.log(sw)

    var text = sw.text || "";
    var style = sw.style || "";
    var id = sw.id || "text-parent" + Date.now().toString() + Math.random()

    document.getElementById(sw.tab || "tab-cheats").innerHTML += `<div id=${JSON.stringify(id)} style="${style}">${text}</div>`

}



window.onLicenseKeyInput = (keystring)=>{

}