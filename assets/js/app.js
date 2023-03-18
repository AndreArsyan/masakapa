var BAHAN = ''

var settings = {
    "url": "https://api.openai.com/v1/chat/completions",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
    },
    "data": JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": "Hi ChatGPT, tampilkan 1 resep makanan indonesia yang bisa dimasak hanya dengan menggunakan bahan berikut ini: " + BAHAN
            }
        ],
        "temperature": 0.7
    }),
};

$(document).ready(function () {
    $("#reqsGPT").click(function () {
        $("#loading-prompt").show();
        $("#modal-close").hide();
        $("#modal-btn-close").hide();
        BAHAN = $("#bahan").val()
        $.ajax(settings).done(function (response) {
            $("#loading-prompt").hide();
            $("#modal-close").show();
            $("#modal-btn-close").show();
            content = response.choices[0].message.content
            $("#gptcontent").text(content.trim());
        });
    });

    var myModalEl = document.getElementById('exampleModal')
    myModalEl.addEventListener('hide.bs.modal', function (event) {
        $("#gptcontent").text("");
    })
});



