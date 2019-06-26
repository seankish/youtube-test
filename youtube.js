// $(document).ready(function () {
// $(function () {
// init();

$("#ytForm").on('submit', function (e) {
    e.preventDefault();
    console.log("clicked")
    var request = gapi.client.youtube.search.list({
        kind: "youtube#searchResult",
        part: "snippet",
        type: "video",
        q: $("#textBox").val().replace(/%20/g, "+"),
        maxResults: 3,
        order: "viewCount",
    })
    // execute request
    request.execute(function (response) {
        var str = response.result;
        console.log(str)

        $.each(response.result.items, function (index, item) {
            $("#results").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + item.id.videoId + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');


        });
    });
    return false;
});

function init() {
    console.log(gapi.client);

    console.log('Search Started');
    var apiKey = 'AIzaSyBi1ync9dV5CDPTmJmW135UexiYcMjmQWY';
    var q = $('#textBox').val();

    gapi.client.setApiKey(apiKey);
    gapi.client.load('youtube', 'v3', function () {
        isLoad = true;
    });
    console.log('Search Request');

    // request = gapi.client.youtube.search.list({
    //     q: 'q',
    //     part: 'id, snippet',
    //     type: 'video',
    //     order: 'date'
    // });


    // request.execute(function (response) {
    //     var str = JSON.stringify(response.result);
    //     $('#textInput').html('<pre>' + str + '</pre>');
    // });
};
