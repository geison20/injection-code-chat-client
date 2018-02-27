class Loader {
    constructor (chat) {
        this.iframe = document.createElement("iframe");
        this.iframe.src = chat.token;

        console.log(this.iframe);

        this.script = document.getElementsByTagName("script")[0];
        this.script.parentNode.insertBefore(this.iframe, this.script);
    }
}

new Loader(_chat);
