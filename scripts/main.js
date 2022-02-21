async function apiCall(url) {


    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    catch (error) {
        console.log(error)
    }
}


function appendArticles(articles, main) {

    articles.forEach(element => {
        let div = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("h3");
        let description = document.createElement("p");

        // adding data from the API
        div.classList.add("news")
        image.src = element.urlToImage;
        title.innerText = element.title;
        description.innerText = element.description;

        // appending the data in html page
        div.append(image,title,description);
        div.onclick = ()=>{
            localStorage.setItem('article',JSON.stringify(element));
            window.location.href = 'news.html'
        }
        main.append(div)
    });

}

export { apiCall, appendArticles }