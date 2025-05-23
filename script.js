let pizzaSay = +prompt('Neche eded pizza isteyirsen')
let donerSay = +prompt('Neche eded doner isteyirsen')
let kolaSay = +prompt('Neche eded kola isteyirsen')
let kababSay = +prompt('Neche eded kabab isteyirsen')
let fantaSay = +prompt('Neche eded fanta isteyirsen')
let spriteSay = +prompt('Neche eded sprite isteyirsen')
let ucbaciSay = +prompt('Neche eded uc baci dolmasi isteyirsen')
let yarpaqdolmaSay = +prompt('Neche eded yarpaq dolmasi isteyirsen')
let kelemdolmaSay = +prompt('Neche eded kelem dolmasi isteyirsen')
let asSay = +prompt('Neche eded as isteyirsen')



let donerQiymet = 4
let pizzaQiymet = 6.5
let kolaQiymet = 3
let kababQiymet = 7.5
let fantaQiymet = 3
let spriteQiymet = 3
let ucbaciQiymet = 6
let yarpaqdolmaQiymet = 6
let kelemdolmaQiymet = 6
let asQiymet = 6




let netice = (donerQiymet * donerSay) + (pizzaQiymet * pizzaSay) + (kolaQiymet * kolaSay) + (spriteSay * spriteQiymet) + (fantaQiymet * fantaSay) + (asQiymet * asSay) + (kelemdolmaQiymet * kelemdolmaSay) + (yarpaqdolmaQiymet * yarpaqdolmaSay) + (ucbaciQiymet * ucbaciSay)

document.getElementById('netice').innerHTML = 'Sizin borcunuz', netice; , 'manatdir.'