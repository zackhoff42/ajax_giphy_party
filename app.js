console.log("Let's get this party started!");

let $gifSection = $('#gif-section');
let $searchInput = $('#search-input');

function addGif(res) {
    let results = res.data.length;

    if (results) {
        let randomIndex = Math.floor(Math.random() * results);
        let $newDiv = $('<div>', {class: 'newDiv'});
        let $newGif = $('<img>', { src: res.data[randomIndex].images.original.url });
        $newDiv.append($newGif);
        $gifSection.append($newDiv);
    }   
}

$('#search-form').on('submit', async function (e) {
    e.preventDefault();

    let inputText = $searchInput.val();
    $searchInput.val('');

    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q : inputText,
            api_key : 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
    });

    addGif(res.data);
});

$('.remove').on('click', function () {
    $gifSection.empty();
});