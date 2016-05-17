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
  var skills = ["HTML", "CSS", "JavaScript", "Ruby", "Rails", "ActiveRecord", "Backbone.js", "Underscore.js", "AJAX", "jQuery", "Regular Expressions", "Project Mangement", "Stakeholder Management", "Team Management", "Team Management"];
  var aboutMe = ["I love Web Development.", "I love Photography.", "I love Game of Thrones.", "I mean, who doesn't?", "I play Baseball...", "and Golf.", "Oh and I do CrossFit.", "I love Problem Solving...", "and building things...", "on the web.", "Like this website.", "I'm a proud Irishman...", "who loves a cup of Barry's Tea...", "but I'm an Aussie too.", "Are you still with me?", "That's it for now.", "Thanks for stopping by!"];
  var counter = 0;

  var portfolio = {
    0: { image: "media/yardsale.png", blurb: "Yard Sale is my first mobile app, developed for my final project at General Assembly. The app is built on Rails using jQuery Mobile, jQuery, JavaScript, AJAX and of course, Ruby. The app is designed to make the selling and giving away of items amongst local residents much simpler.", title: "Yard Sale", weblink: "https://yardsale-irl.herokuapp.com", github: "https://github.com/ianlenehan/yardsale" },
    1: { image: "media/movienight.png", blurb: "Movie Night was built to solve that age-old problem of organising a movie night with your friends. Create your own group, create an event, signal your attendance, add the movie to the event and then rate the event afterwards!", title: 'Movie Night', weblink: "https://movienight-irl.herokuapp.com/", github: "https://github.com/ianlenehan/movienight" },
    2: { image: "media/tictactoe.png", blurb: "Tic Tac Toe was my first web app and was built during week three of the WDI course at General Assembly.", title: 'Tic Tac Toe', weblink: "http://ianlenehan.github.io/tic-tac-toe", github: "https://github.com/ianlenehan/tic-tac-toe" },
    3: { image: "media/glance.png", blurb: "Glance was built on Backbone during group project week. I combined with two others to develop this flash card gameified learning tool.", title: 'Glance', weblink: "http://wdi-glance.herokuapp.com/", github: "https://github.com/ianlenehan/flashcards" },
    4: { image: "media/BTTF.png", blurb: "After finishing Tic Tac Toe, I had some time and wanted to try out some of my newly acquired jQuery skills, so I built a fun little trivia game based on the Back to the Future movies.", title: 'Back to the Future', weblink: "http://ianlenehan.github.io/BTTF/", github: "https://github.com/ianlenehan/BTTF" },
  };

  /// basic open animation for photo

  $('.label').on('mouseenter', function () {
    $currentDiv = $(this).parent().find($('.photo-print'));
    $currentDiv.addClass('perspectiveLeft');
  });

  /// basic close animation for photo, except for contact photo

  $('.label').not('#label-third').on('mouseout', function () {
    $currentDiv.addClass('perspectiveLeftRetourn');
    $currentDiv.removeClass('perspectiveLeft');
    setTimeout(function () {
      $currentDiv.removeClass('perspectiveLeftRetourn');
    }, 1500);
  });

  /// close contact photo after 7 secs to allow clicking on links

  $('#label-third').on('mouseout', function() {
    setTimeout( function () {
      $currentDiv.addClass('perspectiveLeftRetourn');
      $currentDiv.removeClass('perspectiveLeft');
      setTimeout(function () {
        $currentDiv.removeClass('perspectiveLeftRetourn');
      }, 1500);
    }, 7000);
  });

  /// display skills for skills div
  //
  // $('#label-second').on('mouseenter', function() {
  //   timerID = setInterval(displaySkills, 800);
  // });

  /// cancel skills timer
  //
  // $('#label-second').on('mouseout', function () {
  //   clearInterval(timerID);
  // });

  /// start about me story on enter

  $('#label-first').on('mouseenter', function () {
    timerID = setInterval(displayAboutIan, 1800);
    if (item > 17) {
      clearInterval(timerID);
    }
  });

  /// cancel about me story on mouseout

  $('#label-first').on('mouseout', function () {
    clearInterval(timerID);
  });

  $('#label-second').on('mouseenter', function () {
    skillsTimer = setInterval(showSkills, 800);

  });

  var showSkills = function () {
    $('#skills').html(skills[item]);
    item ++;
    if (item === skills.length) {
      console.log('reached the end');
      console.log('Item:', item, "Length:", skills.length);
      $('#skills').fadeOut();
      clearInterval(skillsTimer);
      item = 0;
    }
  };

  $('#label-second').on('mouseout', function () {
    clearInterval(skillsTimer);
  });

  /// open portfolio page

  $('#label-fourth').on('click', function() {
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

  /// function to open lightbox

  var displayLightbox = function() {
    $('#portfolio-div').append('<div id="overlay"><h3 class="port-title">' + portfolio[counter].title + '</h3><p class="port-blurb">' + portfolio[counter].blurb + '</p><img class="lrg-img" src="' + portfolio[counter].image + '"><p class="links"><a id="weblink" href="' + portfolio[counter].weblink + '">Weblink</a>  |  <a id="github" href="' + portfolio[counter].github + '">Github</a></p>');
     $('#portfolio-div').append('<img class="close" src="media/close.png"></div>');
     $('#portfolio-div').append('<img id="forward" src="media/down.png">');
     $('#portfolio-div').append('<img id="back" src="media/down.png">');
  };

  /// close lightbox

  $('body').on('click', '.close', function () {
    counter = 0;
    $('#overlay').remove();
    $('#forward').remove();
    $('#back').remove();
    $('.close').remove();
    $('#portfolio-div').animate({
      width: '431.5px',
      height: '300px',
      position: 'absolute',
      top: '250px',
      left: '700px',
      margin: '20px',
      'z-index': 0
    });
    $('#portfolio-click-me').fadeIn();
    $('#fourth-img').fadeIn();
  });


  ////// click to navigate through the portfolio sites
  /// forward

  $('body').on('click', '#forward', function () {
    console.log(counter);
    if (counter >= 4 ) {
      counter = 0;
    } else {
      counter ++;
    }
    $('.port-title').text(portfolio[counter].title);
    $('.port-blurb').text(portfolio[counter].blurb);
    $('.lrg-img').attr('src', portfolio[counter].image);
    $('#weblink').attr('href', portfolio[counter].weblink);
    $('#github').attr('href', portfolio[counter].github);
  });

  /// back

  $('body').on('click', '#back', function () {
    console.log(counter);
    if (counter <= 0 ) {
      counter = 4;
    } else {
      counter --;
    }
    console.log(counter);
    $('.port-title').text(portfolio[counter].title);
    $('.port-blurb').text(portfolio[counter].blurb);
    $('.lrg-img').attr('src', portfolio[counter].image);
  });




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
