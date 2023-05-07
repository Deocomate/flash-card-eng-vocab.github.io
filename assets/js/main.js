$(document).ready(function () {
    console.log(data);
    let dataDay = data[0].vocabulary;
    initSelectLesson(data)
    initHTML(dataDay);
    initApp();


    $("#lesson-select").change(function (e) {
        let day = $(this).val();
        dataDay = data[day - 1].vocabulary
        initHTML(dataDay);
        initApp();
    })
});

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
        arrows: false
    });
}

function initHTML(dataDay) {
    let vocabList = dataDay
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
    $(".flashcard-main")[0].innerHTML = /*html */
        `
    <div class='flashcard-contain'>
        ${htmlVocab}
    </div>
    `
}

function initSelectLesson(data) {
    let select = $("#lesson-select")[0]
    let html = ``;

    let index = 0
    for (let item of data) {
        html += /*html */ `<option value="${item.day}">Day ${item.day}</option>`;
    }
    select.innerHTML = html;
}