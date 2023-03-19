$(document).ready(function () {
    $("#error-prompt").hide();
    $("#reqsGPT").click(function () {
        $("#loading-prompt").show();
        $("#modal-close").hide();
        $("#modal-btn-close").hide();
        BAHAN = $("#bahan").val()
        $.ajax({
            url: "https://flask-hello-world-tau-three.vercel.app/gptcall/?bahan=" + BAHAN,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
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



