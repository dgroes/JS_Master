let articles = document.querySelector(".layout__articles");
let posts = [
    {
        title: "Bringing Warp to Windows: Eng Learnings (So Far)",
        date: "01/03/2025",
        body: "Unlike MacOS or Linux, Windows developers are unique in that they frequently switch between shells. Users might start in PowerShell, quickly jump to Git Bash to run some Unix commands, and then jump into a WSL instance to deploy a server.",
    },

    {
        title: "Warp Wrapped: 2024 in Review",
        date: "03/03/2025",
        body: "We also gave our brand a makeover, partnered with OpenAI to launch a ChatGPT desktop integration, and were named one of Fast Company's most innovative companies of 2024 in the enterprise category. To celebrate our biggest year yet, we’re looking back at some of our favorite features and improvements we shipped last year.",
    },

    {
        title: "Reducing WASM binary size: lessons from building a web terminal",
        date: "05/03/2025",
        body: "We’re building Warp, an intelligent terminal written in Rust. We recently decided to cross-compile our app to web via WASM and are now making Warp available through the browser. Bringing Warp to the web is another step towards making our app more available and more useful for collaborative development! When we set out to bring Warp to the web, we faced several engineering challenges. One of the most significant was that the Warp executable was simply too large. It was 21.4MB after gzip compression. After digging in here, our big wins were (a) getting our Rust compiler options right and (b) building a framework for loading assets asynchronously. We ended up at 8MB. How did we get there?",
    },

    {
        title: "No Glyph Left Behind: Font Fallback in a WASM Terminal",
        date: "08/03/2025",
        body: "We’re building Warp, the intelligent terminal with AI and your team’s knowledge built-in. Warp is built in Rust, and we recently took advantage of Rust’s ability to cross-compile to WebAssembly (WASM) to bring Warp to the web. Enabling Warp in the browser brings us closer to our vision of making the terminal more accessible and collaborative!",
    },
]

posts.forEach(article => {
    articles.innerHTML += `
    <article class="articles__article">

        <h3 class="articles__title"> ${article.title}</h3>
        <span class="article__date">${article.date}</span>
        <p class="article__body">${article.body}</p>
        <a href="#" class="article__btn">Leer Más</a>

    </article>
    `;
});