
//create a click from the user pressing the return key
$("#textbox").keyup(function(event) {
  if (event.keyCode === 13) {
      $("#submit").click();
    }
});

//take user input and save it to a variable
$('#submit').click(function(x) {
  var searchItem = "france"; //$("#textbox").val();
  var mainSearchURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + searchItem;
  var relatedSearchURL = "https://en.wikipedia.org/api/rest_v1/page/related/" + searchItem;

  //Ajax main search result
  $.ajax({
        type: "GET",
        url: mainSearchURL,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success(response) {
          document.getElementById("MR_title").innerHTML = response.displaytitle;
        document.getElementById("MR_content").innerHTML = response.extract;
        $('.main_result').click(function() {
         window.location.href = response.content_urls.desktop.page;
        })

        },

  error(jqXHR, status, errorThrown) {
  	console.log(jqXHR);
}
    }); // 1st ajax ending tag

  //AJAX related search results
  $.ajax({
        type: "GET",
        url: relatedSearchURL,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success(response) {

//display title and extract of related results
$("#R1_title").append(response.pages[0].displaytitle);   $("#R1_content").append(response.pages[0].extract);

$("#R2_title").append(response.pages[1].displaytitle);             $("#R2_content").append(response.pages[1].extract);

$("#R3_title").append(response.pages[2].displaytitle);   $("#R3_content").append(response.pages[2].extract);

$("#R4_title").append(response.pages[3].displaytitle);   $("#R4_content").append(response.pages[3].extract);

$("#R5_title").append(response.pages[4].displaytitle);   $("#R5_content").append(response.pages[4].extract);

 var redirect = "window.location.href";
 var redirectURL = ".content_urls.desktop.page";

//redirect events of related results
$('#related1').click(function() {
    window.location.href = response.pages[0].content_urls.desktop.page;
 });

$('#related2').click(function() {
    window.location.href = response.pages[1].content_urls.desktop.page;
 });

$('#related3').click(function() {
    window.location.href = response.pages[2].content_urls.desktop.page;
 });

$('#related4').click(function() {
    window.location.href = response.pages[3].content_urls.desktop.page;
 });

$('#related5').click(function() {
    window.location.href = response.pages[4].content_urls.desktop.page;
 });

        },

        error(jqXHR, status, errorThrown) {
  	    console.log(jqXHR);
},

        }); // 2nd AJAX ending tag

}); // click function ending tag

$("h3").hover(function(){
    $(this).css("background-color", "blue");
    }, function(){
    $(this).css("background-color", "orange");
});
