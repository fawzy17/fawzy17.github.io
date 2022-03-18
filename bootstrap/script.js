var toastTrigger = document.getElementById('liveToastBtn')
var clsToastTrigger = document.getElementById('clsToast')
var clsToastTrigger2 = document.getElementById('clsToast2')
var clsToastTrigger3 = document.getElementById('clsToast3')
var toastLiveExample = document.getElementById('liveToast')
var toastLiveExample2 = document.getElementById('liveToast2')
var toastLiveExample3 = document.getElementById('liveToast3')
function beli(price, idPhoto){
    let Wallet = document.getElementById("myWallet").innerHTML
    var tempWallet = parseInt(Wallet)
    let tempVal = document.getElementById(idPhoto).value
    if(tempWallet >= price){
        if(tempVal == "false"){
            Wallet = Wallet - price
            document.getElementById("myWallet").innerHTML = Wallet
            document.getElementById(idPhoto).innerHTML = "Owned"
            document.getElementById(idPhoto).value = "true"
            var toast = new bootstrap.Toast(toastLiveExample3)
                toast.show()
        }else{
            var toast = new bootstrap.Toast(toastLiveExample)
                toast.show()
        }
    }else{
        var toast = new bootstrap.Toast(toastLiveExample2)
        toast.show()
    }
}

if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
        }
    )
} 
if (clsToastTrigger) {
    clsToastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)
        toast.dispose()
        }
    )
    clsToastTrigger2.addEventListener('click', function () {
        var toast2 = new bootstrap.Toast(toastLiveExample2)
        toast2.dispose()
        }
    )
    clsToastTrigger3.addEventListener('click', function () {
        var toast2 = new bootstrap.Toast(toastLiveExample3)
        toast2.dispose()
        }
    )
} 

