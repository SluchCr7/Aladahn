
let apiurl = "https://api.aladhan.com/v1/timingsByCity"

let First = document.getElementById("First"),
    Second = document.getElementById("Second"),
    Third = document.getElementById("Third"),
    Fourth = document.getElementById("Fourth")
    Fifth = document.getElementById("Fifth")
    CardsCont = document.getElementById("CardsCont")
    data = document.getElementById("data")
    title = document.getElementById("title")
    sun_Shine = document.getElementById("sun_Shine")
    



let DropdownCities = document.getElementById("DropdownFrom")

let EgyptionCities = [
    "Cairo",
    "Alexandria",
    "Giza",
    "dakahlia",
    "Aswan",
    "Luxor",
    "Faiyum",
    "Hurghada",
    "Port Said",
    "Sohag",
    "Damietta",
    "Mansoura",
    "Sharm El-Sheikh",
    "Shibin El-Kom",
    "Qena",
    "Ismailia",
    "Asyut",
    "Beni Suef",
    "Sohag",
    "Suez",
    "Qalyubia",
    "Gharbia",
] 



EgyptionCities.forEach((egCity) => {
    let option = document.createElement("option")
    option.value = egCity
    option.innerHTML = egCity
    DropdownCities.appendChild(option)
})

DropdownCities.addEventListener("change", (e) => {
    axios.get(apiurl,
        {
            params: {
                city: DropdownCities.value,
                country: "Egypt",
                method: 5
            }
        }).then((res) => {
        const timings = res.data.data.timings
        title.innerHTML = res.data.data.date.readable
        // data.innerHTML = res.data.data.date.hijri
        // document.getElementById("year").innerHTML = res.data.data.date.hijri.year
        document.getElementById("month").innerHTML = res.data.data.date.hijri.month.ar
        document.getElementById("day").innerHTML = res.data.data.date.hijri.day
        First.innerHTML = timings.Fajr
        Second.innerHTML = timings.Dhuhr
        Third.innerHTML = timings.Asr
        Fourth.innerHTML = timings.Maghrib
        Fifth.innerHTML = timings.Isha
    })
})

let params = {
    city: "cairo",
    country: "egypt",
    method: 5
}

axios.get(apiurl, { params }).then((res) => {
    const timings = res.data.data.timings
    title.innerHTML = res.data.data.date.readable
        // document.getElementById("year").innerHTML = res.data.data.date.hijri.year
    document.getElementById("month").innerHTML = res.data.data.date.hijri.month.ar
    document.getElementById("day").innerHTML = res.data.data.date.hijri.day
    First.innerHTML = timings.Fajr
    Second.innerHTML = timings.Dhuhr
    Third.innerHTML = timings.Asr
    Fourth.innerHTML = timings.Maghrib
    Fifth.innerHTML = timings.Isha

})