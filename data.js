const articleContainer = document.querySelector( ".article-container" );

async function getArticle() {
    try {
        const response = await axios.get( 'https://643a5379bd3623f1b9b100c6.mockapi.io/post/article' );
        for ( data of response.data ) {
            const article = document.createElement( "div" );
            article.classList.add( "article" );
            const strukArticle = `
                <img src="${data.image}" alt="">
                <h3>${data.title}</h3>
                <p>${data.content.substring( 0, 200 )}. . . .</p>
                <a href="#">Read More . . .</a>
            `;
            article.innerHTML = strukArticle;
            articleContainer.appendChild( article );
        }
    } catch ( error ) {
        console.error( error );
    }
}

getArticle();

document.getElementById( "submit" ).addEventListener( "click", async () => {
    const name = document.getElementById( "name" );
    const title = document.getElementById( "title" );
    const content = document.getElementById( "content" );
    const image = document.getElementById( "img" );
    let data = {
        name: name.value,
        title: title.value,
        content: content.value,
        image: image.value,
    };
    try {
        await axios.post( 'https://643a5379bd3623f1b9b100c6.mockapi.io/post/article', data );
        articleContainer.innerHTML = "";
        getArticle();
    } catch ( error ) {
        console.log( error );
    }
} );