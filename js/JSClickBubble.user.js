// ==UserScript==
// @name         鼠标点击冒泡
// @version      0.1
// @description  一个用JS写的鼠标左击特效
// @description  一些Emoji 😀😃😄😁😆😅😂🤣☺😊😚😙😗😘😍😌😉🙃🙂😇😋😜😝😛🤑🤗🤓😎🤡🤠😖😣☹🙁😕😟😔😞😒😏😫😩😤😠😡😶😐😑😯😦😥😢😨😱😳😵😲😮😧🤤😭😪😴🙄🤔😬🤥🤐💩👺👹👿😈🤕🤒😷🤧🤢👻💀☠👽👾🤖🎃😺😸😹🙏👏🙌👐😾😿🙀😽😼😻
// @author       一碗单炒饭
// @include      /[a-zA-z]+://[^\s]*/
// @run-at       document_start
// ==/UserScript==
onload = function () {
    var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function (e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#E94F06";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
        /*switch (++click_cnt) {
            case 10:
                $elem.innerText = "OωO";
                break;
            case 20:
                $elem.innerText = "(๑•́ ∀ •̀๑)";
                break;
            case 30:
                $elem.innerText = "(๑•́ ₃ •̀๑)";
                break;
            case 40:
                $elem.innerText = "(๑•̀_•́๑)";
                break;
            case 50:
                $elem.innerText = "（￣へ￣）";
                break;
            case 60:
                $elem.innerText = "(╯°口°)╯(┴—┴";
                break;
            case 70:
                $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
                break;
            case 80:
                $elem.innerText = "╮(｡>口<｡)╭";
                break;
            case 90:
                $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
                break;
            case 100:
                $elem.innerText = "(ꐦ°᷄д°᷅)";
                break;
            default:
		// 手动更换下面这行双引号里面的内容 如"😀"
                $elem.innerText = "❤";
                break;
        }*/

        var a = new Array("😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣","😊", "😚", "😙", "😗", "😘", "😍", "😌", "😉", "🙃", "🙂",
            "😇", "😋", "😜", "😝", "😛", "🤑", "🤗", "🤓", "😎", "🤡", "🤠", "😖", "😣", "☹", "🙁", "😕", "😟", "😔", "😞", "😒", "😏", "😫",
            "😩", "😤", "😠", "😡", "😶", "😐", "😑", "😯", "😦", "😥", "😢", "😨", "😱", "😳", "😵", "😲", "😮", "😧", "🤤", "😭", "😪", "😴",
            "🙄", "🤔", "😬", "🤥", "🤐", "💩", "👿", "😈", "🤕", "🤒", "😷", "🤧", "🤢", "👻", "💀",  "👽", "❤", "OωO", "(๑•̀_•́๑)");
        $elem.innerText = a[click_cnt];
        click_cnt = Math.floor(Math.random() * a.length);
        $elem.style.fontSize = 20 + "px";
        var increase = 0;
        var anim;
        setTimeout(function () {
            anim = setInterval(function () {
                if (++increase == 150) {
                    clearInterval(anim);
                    $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (150 - increase) / 120;
            }, 8);
        }, 70);

        //window.media = new Audio("http://lol.52pk.com/pifu/sounds/Tryndamere.mp3")
        //document.documentElement.addEventListener('click',function(){media.play();});
        $body.appendChild($elem);
    };
};
