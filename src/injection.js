const _chat = _chat || {};
_chat.token = "ffad3c5a1a4ccdae746efda8f7bf67bf6c63b1bce1cf790f278a07c66f980bc7c8118f74878909e18f3bcd6a22853084ee98f9b5ec8ac823c9204c72875f119d";

(function () {
    const Chat = document.createElement("script");
    Chat.type = "text/javascript";
    Chat.async = true;
    Chat.src = "//s3-sa-east-1.amazonaws.com/static.chat/loader.min.js";

    let script = document.getElementsByTagName("script")[0];
    script.parentNode.insertBefore(Chat, script);
})();
