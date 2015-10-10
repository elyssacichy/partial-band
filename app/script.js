'use strict';

$(function() {

  $("#name").click(function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      $("#adjective").text(adjective);
    });

    $.get('verb', function(response) {
      var verb = response.word;
      $("#verb").text(verb);
    });

    $.get('noun', function(response) {
      var noun = response.word;
      $("#noun").text(noun);
    });

    console.log(verb.val);
    console.log(noun);
    console.log(adjective.text());


    var currentBandName = adjective.innerHTML + ' ' + verb + ' ' + noun;

    $("#saveName").click(function() {
      $("#bandNames").text(currentBandName + ', ');
    });
  });


    // $("#saveName").on('click', (function(e) {
    //   e.preventDefault();

    //   $.get('bandName' function() {
    //   $("#bandNames").append('<li>' + bandName + '</li>');
    //   })
    // })
  });


  $("#submitWords").on("submit", function(e) {
    e.preventDefault();

    var adjective = $("input[name=adjective]").val();
    var adjPost;

    if (adjective) {
      adjPost = {word: adjective};
      $.post("adjective", adjPost, function(response) {
        var adjectiveRes = response.msg;
        $("#adjectiveRes").text(adjectiveRes);
      });
    }

    if (verb) {
      verbPost = {word: verb};
      $.post("verb", verbPost, function(response) {
        var verbRes = response.msg;
        $("#verbRes").text(verbRes);
      });
    }

    if (noun) {
      nounPost = {word: noun};
      $.post("noun", nounPost, function(response) {
        var nounRes = response.msg;
        $("#nounRes").text(nounRes);
      });
    }

});
