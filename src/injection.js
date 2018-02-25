(function (src) {
    const Chat = document.createElement("script");
    let script = {};

    Chat.type = "text/javascript";
    Chat.async = true;
    Chat.src = src;

    script = document.getElementsByTagName("script")[0];
    script.parentNode.insertBefore(Chat, script);
})("//s3-sa-east-1.amazonaws.com/static.chat/loader.min.js");
