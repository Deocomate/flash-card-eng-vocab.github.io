$(document).ready(function () {


    console.log(data);
    let vocabList = data[0].vocabulary
    let htmlVocab = ``;
    for (const vocab of vocabList) {
        htmlVocab += //html
            `
        <div class='item'>
            <div class="contain-position">
                <div class="flashcard-item front">
                    <div class="px-4 px-md-5">
                        <p class="mb-0 vocabulary"><b class="fs-1">${vocab.word}</b></p>
                        <p style="line-height: 25px;" class="example fs-3 text-center">
                        ${vocab.example}
                        </p>
                    </div>
                </div>
                <div class="flashcard-item back">
                    <div class="px-4 px-md-5">
                        <p class="mb-0 vocabulary"><b class="fs-1">${vocab.vnm}</b></p>
                        <p style="line-height: 25px;" class="example fs-3 text-center">
                            ${vocab.example_vnm}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    console.log(htmlVocab);
    $(".flashcard-contain")[0].innerHTML = htmlVocab





    initApp();
});

function renderFlashcard() {

}

function initApp() {
    let colorList = [
        "19A7CE",
        "3C486B",
        "D14D72",
        "BA90C6",
        "F99417",
        "674188",
        "7286D3",
        "EB455F",
        "7743DB",
        "6D9886",
        "E64848",
    ]
    let flashcard = $(".item").toArray()
    for (const item of flashcard) {
        let randomIndex = Math.floor(Math.random() * colorList.length)
        let randomColor = "#" + colorList[randomIndex]
        $(item).find(".flashcard-item").css({
            "background-color": randomColor
        })
    }
    $(".front").click(function (e) {
        $(this).toggleClass("flip")
        $(this).parent().find(".back").toggleClass("flip")
    });
    $(".back").click(function (e) {
        $(this).toggleClass("flip")
        $(this).parent().find(".front").toggleClass("flip")
    });
    $('.flashcard-contain').slick({
        arrows:false
    });
}