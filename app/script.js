'use strict';

$(function() {
  var adjective,
      verb,
      noun;
  $("#name").click(function() {
    $.get('adjective', function(response) {
      adjective = response.word;
      $("#adjective").text(adjective);
    });

    $.get('verb', function(response) {
      verb = response.word;
      $("#verb").text(verb);
    });

    $.get('noun', function(response) {
      noun = response.word;
      $("#noun").text(noun);
    });

    var currentBandName = adjective + ' ' + verb + ' ' + noun;

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
