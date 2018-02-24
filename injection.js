(function () {
    let Chat = document.createElement("script");

    Chat.type = "text/javascript";
    Chat.async = true;
    Chat.src = "//s3-sa-east-1.amazonaws.com/static.chat/loader.js";

    const script = document.getElementsByTagName("script")[0];
    script.parentNode.insertBefore(Chat, s);
})();
