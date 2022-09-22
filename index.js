$(document).ready(function () {
    $(".bilgisayar > .blgsscm").attr("disabled", "disabled");

    $(".scm").click(function () {
        $(this).children("img").css("border-bottom", "solid 5px black");

        var secim = "";
        var durum = "";
        var pcsecim = "";
        var pcskor = Math.floor($(".bilgisayarskor").html());
        var kullaniciskor = Math.floor($(".kullaniciskor").html());
        $(this).hasClass("taş") ? (secim = "taş") : "";
        $(this).hasClass("kağıt") ? (secim = "kağıt") : "";
        $(this).hasClass("makas") ? (secim = "makas") : "";

        $(".kullanici").children("button").attr("disabled", "disabled");
        var bilgisayar = Math.floor(Math.random() * 3) + 1;

        $(".blgsscm > img")
            .eq(bilgisayar - 1)
            .css("opacity", ".5");

        if (bilgisayar == "1") {
            pcsecim = "taş";
        }

        if (bilgisayar == "2") {
            pcsecim = "kağıt";
        }

        if (bilgisayar == "3") {
            pcsecim = "makas";
        }

        if (secim == pcsecim) {
            durum = "BERABERE";
        }

        if (secim == "taş" && pcsecim == "makas") {
            durum = "KAZANDINIZ";
            kullaniciskor++;
        }

        if (secim == "taş" && pcsecim == "kağıt") {
            durum = "KAYBETTİNİZ";
            pcskor++;
        }

        if (secim == "kağıt" && pcsecim == "taş") {
            durum = "KAZANDINIZ";
            kullaniciskor++;
        }

        if (secim == "kağıt" && pcsecim == "makas") {
            durum = "KAYBETTİNİZ";
            pcskor++;
        }

        if (secim == "makas" && pcsecim == "taş") {
            durum = "KAYBETTİNİZ";
            pcskor++;
        }

        if (secim == "makas" && pcsecim == "kağıt") {
            durum = "KAZANDINIZ";
            kullaniciskor++;
        }

        $(".bilgi > .durum").html(durum);
        $(".bilgi > .pcscmh > .pcscm").html(pcsecim);
        $(".kullaniciskor").html(kullaniciskor);
        $(".bilgisayarskor").html(pcskor);

        setTimeout(function () {
            $("button").removeAttr("disabled");
            $("button > img").removeAttr("style");
        }, 1000);
    });
});