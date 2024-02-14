$(document).ready(function () {
    $(".container")
        .mouseenter(function () {
            $(".card").stop().animate(
                {
                    top: "-90px",
                },
                "slow"
            ).promise()
                .then(function () {
                    $("#heart").css("z-index","20");
                });;
            $("#envelope").removeClass("envelope-close");
            $("#envelope").addClass("envelope-open");
        })
        .mouseleave(function () {
            $("#heart").css("z-index","2");
            $(".card")
                .stop()
                .animate(
                    {
                        top: 0,
                    },
                    "slow"
                )
                .promise()
                .then(function () {
                    $("#envelope").removeClass("envelope-open");
                    $("#envelope").addClass("envelope-close");
                });
        });

    $(".heart").on('click' , function (e) {
        e.preventDefault();
        $(".first-step").addClass("d-none");
        $(".two-step").removeClass("d-none");
    });

    $(".heart-2").on('click' , function (e) {
        e.preventDefault();
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    });
});
