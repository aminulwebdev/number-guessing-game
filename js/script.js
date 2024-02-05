let player = document.querySelector(".player")

let playerOneBox = document.querySelector(".player_one_box")
let playertwoBox = document.querySelector(".player_two_box")

let pleayerOneInput = document.querySelector(".player_one_input")
let pleayerOneErr = document.querySelector(".player_oneErr")
let pleayerOnebtn = document.querySelector(".player_one_btn")



let pleayertwoInput = document.querySelector(".player_two_input")
let pleayertwoErr = document.querySelector(".player_twoErr")
let pleayertwobtn = document.querySelector(".player_two_btn")

let img_one =document.querySelector(".img_one")
let img_two =document.querySelector(".img_two")

let chanceRemain = document.querySelector(".chanceRemain")
let chance = document.querySelector(".chance")
let restart = document.querySelector(".restart")
let playerOneNumberStore
let totalChance = 5;

pleayerOnebtn.addEventListener("click", function () {

    if (Boolean(pleayerOneInput.value)) {

        if (Boolean(pleayerOneInput.value - 20)) {
            if (pleayerOneInput.value >= 0 && pleayerOneInput.value <= 10) {
                pleayerOneErr.innerHTML = ``
                player.innerHTML = `Second Player`
                playerOneBox.style.display = "none"
                playertwoBox.style.display = "block"
                restart.style.display = "none"
                playerOneNumberStore = pleayerOneInput.value
            } else {
                pleayerOneErr.innerHTML = `Number must be between or equal 0 to 10.`
            }
        } else {
            pleayerOneErr.innerHTML = `Please enter a number, don't use text.`
        }

    } else {
        pleayerOneErr.innerHTML = `Please enter a number and start the
        game.`
    }
})

pleayertwobtn.addEventListener("click", function () {
    if (Boolean(pleayertwoInput.value)) {
        if (Boolean(pleayertwoInput.value - 20)) {
            if (pleayertwoInput.value >= 0 && pleayertwoInput.value <= 10) {
                pleayertwoErr.innerHTML = ``
                if (totalChance !== 1) {
                    if (playerOneNumberStore == pleayertwoInput.value) {
                        pleayertwoErr.innerHTML = ``
                        player.innerHTML = `Congratulations, you are winner`
                        pleayertwobtn.style.display = "none"
                        pleayertwoInput.style.display = "none"
                        chanceRemain.style.display = "none"
                        restart.style.display = "block"
                        img_one.style.display = "none"
                        img_two.style.display = "block"
                    } else {
                        totalChance--
                        pleayertwoErr = `Wrong Number!! Please try again.`
                        chance.innerHTML = totalChance
                    }

                } else {
                    player.innerHTML = `Opps!! First player is winner`
                    pleayertwoInput.style.display = "none"
                    pleayertwobtn.style.display = "none"
                    chanceRemain.style.display = "none"
                    restart.style.display = "block"
                    img_one.style.display = "none"
                    img_two.style.display = "block"
                }
            } else {
                pleayertwoErr.innerHTML = `Number must be between or equal 0 to 10.`
            }
        } else {
            pleayertwoErr.innerHTML = `Please enter a number, don't use text.`
        }
    } else {
        pleayertwoErr.innerHTML = `Please enter a number and start the
        game.`
    }
})

restart.addEventListener("click", function(){
    location.reload()
    pleayerOneInput.value=""
    pleayertwoInput.value=""
})

