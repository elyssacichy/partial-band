'use strict';

$(function() {
  var adjective = '',
      verb = '',
      noun = '',
      currentBandName;

  $("#name").click(function() {
    $.get('adjective', function(response) {
      adjective = response.word;
      currentBandName = adjective + ' ' + verb + ' ' + noun;
      $("#adjective").text(adjective);
    });

    $.get('verb', function(response) {
      verb = response.word;
      currentBandName = adjective + ' ' + verb + ' ' + noun;
      $("#verb").text(verb);
    });

    $.get('noun', function(response) {
      noun = response.word;
      currentBandName = adjective + ' ' + verb + ' ' + noun;
      $("#noun").text(noun);
    });
  });

  $("#submitWords").on("submit", function(e) {
    e.preventDefault();

    var adjective = $("input[name=adjective]").val();
    var adjPost;

    var verb = $("input[name=verb]").val();
    var verbPost;

    var noun = $("input[name=noun]").val();
    var nounPost;

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
});
