let myName = document.querySelector('#myName')
myName.innerHTML = prompt("Lutfen Adinizi Giriniz")

function saatGuncelle() {
    let guncel = document.querySelector('#myClock')
    let tarih = new Date()
    let saat = tarih.getHours()
    let dakika = tarih.getMinutes()
    let saniye = tarih.getSeconds()

    let gunler =["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumaertesi"]
    let gun = gunler[tarih.getDay()];

    let zaman = `${saat}:${dakika}:${saniye}, ${gun}`
    guncel.innerHTML = zaman;
    setTimeout(saatGuncelle,1000)

}
saatGuncelle();