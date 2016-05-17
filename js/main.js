var timerID;
var item = 0;

$(document).ready(function () {

// calling the pagepiling feature
  $('#pagepiling').pagepiling({
    direction: 'vertical'
  });

////////

  setTimeout( function () {
    $('.subtitle').addClass('tinRightIn');
    $('.subtitle').toggle();
  }, 2000);

  var $currentDiv;
  var skills = ["JavaScript", "Ruby", "Rails", "ActiveRecord", "Backbone.js", "AJAX", "jQuery", "Regular Expressions", "Project Mangement", "Stakeholder Management", "Team Management", "Underscore.js"];
  var aboutMe = ["I love Web Development.", "I love Photography.", "I love Game of Thrones.", "I mean, who doesn't?", "I play Baseball...", "and Golf.", "Oh and I do CrossFit.", "I love Problem Solving...", "and building things...", "on the web.", "Like this website.", "I'm a proud Irishman...", "who loves a cup of Barry's Tea...", "but I'm an Aussie too.", "Are you still with me?", "That's it for now.", "Thanks for stopping by!"];
  var counter = 0;

  var portfolio = {
    0: { image: "media/yardsale.png", blurb: "Yard Sale is my first mobile app, developed for my final project at General Assembly. The app is built on Rails using jQuery Mobile, jQuery, JavaScript, AJAX and of course, Ruby. The app is designed to make the selling and giving away of items amongst local residents much simpler.", title: "Yard Sale" },
    1: { image: "media/movienight.png", blurb: "Movie Night was built to solve that age-old problem of organising a movie night with your friends. Create your own group, create an event, signal your attendance, add the movie to the event and then rate the event afterwards!", title: 'Movie Night' },
    2: { image: "media/tictactoe.png", blurb: "Tic Tac Toe was my first web app and was built during week three of the WDI course at General Assembly.", title: 'Tic Tac Toe' },
    3: { image: "media/glance.png", blurb: "Yard Sale is my first mobile app, developed for my final project at General Assembly. The app is built on Rails using jQuery Mobile, jQuery, JavaScript, AJAX and of course, Ruby. The app is designed to make the selling and giving away of items amongst local residents much simpler.", title: 'Glance' },
    4: { image: "media/BTTF.png", blurb: "Yard Sale is my first mobile app, developed for my final project at General Assembly. The app is built on Rails using jQuery Mobile, jQuery, JavaScript, AJAX and of course, Ruby. The app is designed to make the selling and giving away of items amongst local residents much simpler.", title: 'Back to the Future' },
  };

  $('.label').on('mouseenter', function () {
    $currentDiv = $(this).parent().find($('.photo-print'));
    $currentDiv.addClass('perspectiveLeft');
  });

  $('.label').not('#label-third').on('mouseout', function () {
    $currentDiv.addClass('perspectiveLeftRetourn');
    $currentDiv.removeClass('perspectiveLeft');
    setTimeout(function () {
      $currentDiv.removeClass('perspectiveLeftRetourn');
    }, 1500);
  });

  $('#label-third').on('mouseout', function() {
    setTimeout( function () {
      $currentDiv.addClass('perspectiveLeftRetourn');
      $currentDiv.removeClass('perspectiveLeft');
      setTimeout(function () {
        $currentDiv.removeClass('perspectiveLeftRetourn');
      }, 1500);
    }, 7000);
  });

  $('#label-second').on('mouseenter', function() {
    timerID = setInterval(displaySkills, 800);
  });

  $('#label-second').on('mouseout', function () {
    clearInterval(timerID);
  });

  $('#label-first').on('mouseenter', function () {
    timerID = setInterval(displayAboutIan, 1800);
    if (item > 17) {
      clearInterval(timerID);
    }
  });

  $('#label-fourth').on('click', function() {
    var $template = $('portfolio-template').html();
    $('#portfolio-click-me').fadeOut();
    $('#fourth-img').fadeOut();
    $('#portfolio-div').animate({
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      margin: 0,
      'z-index': 100
    });
    displayLightbox();
  });

  var displayLightbox = function() {
    var $img = $('<img>', {
      "src": portfolio[counter].image,
      "class": 'lrg-img',
      "id": counter
    });
    $img.appendTo('#portfolio-div');
    $('#portfolio-div').append('<h3 class="port-title">' + portfolio[counter].title + '<h3>');
    $('#portfolio-div').append('<p class="port-blurb">' + portfolio[counter].blurb + '</p>');
    $('#portfolio-div').append('<img class="close" src="media/close.png">');
  };

  var displaySkills = function () {
    var skillIndex = Math.round(Math.random() * 10) + 0;
    var randomSkill = skills[skillIndex];
    console.log(skillIndex);
    var left = Math.round(Math.random() * 245) + 10;
    var top = Math.round(Math.random() * 255) + 5;
    counter ++;
    var divID = 'skill' + counter.toString();
    $('#skills-div').append('<div class="skill animated" id="'+ divID + '">' + randomSkill + '</div>');
    var $thisDiv = $(document.getElementById(divID));
    $thisDiv.css({ left: left, top: top, display: 'inline-block' });
    setTimeout(function() {
      $($thisDiv).addClass('vanishOut');
    }, 2000, function () {
      $($thisDiv).remove();
    });
  };

  var displayAboutIan = function () {
    $('#about-ian').html(aboutMe[item]);
    item ++;
  };



});
