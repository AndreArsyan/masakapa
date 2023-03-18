$(document).ready(function () {
    $("#error-prompt").hide();
    $("#reqsGPT").click(function () {
        $("#loading-prompt").show();
        $("#modal-close").hide();
        $("#modal-btn-close").hide();
        BAHAN = $("#bahan").val()
        prompt = "Hi ChatGPT, tampilkan 1 resep makanan indonesia yang bisa dimasak hanya dengan menggunakan bahan berikut ini: " + BAHAN
        $.ajax({
            url: "https://api.openai.com/v1/chat/completions",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
            data: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                "temperature": 0.7
            }),
            error: function () {
                $("#loading-prompt").hide();
                $("#modal-close").show();
                $("#modal-btn-close").show();
                $("#error-prompt").show();
            },
            success: function (response) {
                $("#loading-prompt").hide();
                $("#modal-close").show();
                $("#modal-btn-close").show();
                content = response.choices[0].message.content
                $("#gptcontent").text(content.trim());
            },
            timeout: 20000 // sets timeout to 15 seconds
        });
    });

    var myModalEl = document.getElementById('exampleModal')
    myModalEl.addEventListener('hide.bs.modal', function (event) {
        $("#gptcontent").text("");
        $("#error-prompt").hide();
    })
});



