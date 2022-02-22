(function () {

    let qrText = document.getElementById("text-reciever")
    let qrImg = document.querySelector(".img-qr")
    const foregroundColorSelector = document.getElementById("foreground")
    const backgroundColorSelector = document.getElementById("background")
    const form = document.querySelector(".form")
    let foregroundColor = 'ffffff'
    let backgroundColor = '2c7dfa'

    //getting the foreground color
    foregroundColorSelector.addEventListener("change", (e) => {
        foregroundColor = e.target.value.replace("#", "")
    })
    //getting the background color
    backgroundColorSelector.addEventListener("change", (e) => {
        backgroundColor = e.target.value.replace("#", "")
    })

    //constructing the url for qr image
    function constructUrl(text, foregroundColor, backgroundColor) {
        let newText;
        if (typeof text === 'object') {
            newText = encodeURIComponent(JSON.stringify(text))
        } else {
            newText = encodeURIComponent(text)
        }
        return `https://image-charts.com/chart?chs=150x150&cht=qr&chl=${newText}&icqrf=${foregroundColor}&icqrb=${backgroundColor}&choe=UTF-8`
    }
    //on click event give the new qr image
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const text = qrText.value ? qrText.value : "Please enter a text to continue..."
        qrImg.src = constructUrl(text, foregroundColor, backgroundColor)
        backgroundColor = '2c7dfa'
        foregroundColor = 'ffffff'
        form.reset()
    })
}
)()
