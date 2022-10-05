
$(function() {
   //Get 
   $('#get-button').on('click', function() {
        //TODO: get all users' IDs & display it
        $.ajax({
          url: '/tweets',
          contentType: 'application/json',
          success: function(response){
            var tbodyEl = $(namebody);

            tbodyEl.html('');

            response.tweetinfo.forEach(function(tweetinfo) {
              tbodyEl.append('\
                <tr>\
                    <td class="id">' + tweetinfo.user.id + '</td>\
                    <td class="screen name">' + tweetinfo.user.screen_name + '</td>\
                    <td class="name">' + tweetinfo.user.name + '</td>\
                </tr>\
              ');
            });
          }
      });
        
    });


    //Get tweets
    $('#get-tweets-button').on('click', function(){
        //TODO: get tweet info and display it
        $.ajax({
            url: '/tweetinfo',
            contentType: 'application/json',
            success: function(response){
              var tbodyEl = $(tweetbody);

              tbodyEl.html('');

              response.tweetinfo.forEach(function(tweetinfo) {
                tbodyEl.append('\
                  <tr>\
                      <td class="id">' + tweetinfo.id + '</td>\
                      <td class="text">' + tweetinfo.text + '</td>\
                      <td class="created at">' + tweetinfo.created_at + '</td>\
                  </tr>\
                ');
              });
            }
        });
        
    });

    //Get searched tweets
    $('#get-searched-tweets').on('click', function() {
        //TODO: get a searched tweet(s) & display it
        $.ajax({
          url: '/searchinfo',
          contentType: 'application/json',
          success: function(response){
            var tbodyEl = $(searchbody);

            tbodyEl.html('');

            response.tweetinfo.forEach(function(tweetinfo) {
              tbodyEl.append('\
                <tr>\
                    <td class="id">' + tweetinfo.id + '</td>\
                    <td class="text">' + tweetinfo.text + '</td>\
                    <td class="created at">' + tweetinfo.created_at + '</td>\
                </tr>\
              ');
            });
          }
      });
    });


  //CREATE
  $('#create-form').on('submit', function(event){
        event.preventDefault();

        var createInput = $('#create-input');

        //TODO: creat a tweet
        $.ajax({
          url: '/tweetinfo',
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({ text: createInput.val().split(";") }),
          success: function(response) {
            console.log(response);
            createInput.val('');
            $('#get-tweets-button').click();

            

            
          }
      });

  });

    //Create searched tweets
  $('#search-form').on('submit', function(event){
    event.preventDefault();
    var userID = $('#search-input');
    
    //TODO: search a tweet and display it.

  });

  //UPDATE/PUT
  $("#update-user").on('submit', function(event){
      event.preventDefault();
    var updateInput = $('#update-input');
    var inputString = updateInput.val();

    const parsedStrings = inputString.split(';');

    var name = parsedStrings[0];
    var newName = parsedStrings[1];
    
    console.log(name);
    console.log(newName);
    //TODO: update a tweet

     $.ajax({
        url: '/tweets/' + name,
        method: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(({ newName:newName})),
        success: function(response){
          console.log(response);
          $('#update-input').click();
          
        }
      });
    

  });


  //DELETE
  $("#delete-form").on('submit', function() {
    var id = $('#delete-input')
    event.preventDefault();

    //TODO: delete a tweet
    $.ajax({
      url: '/tweetinfo/' + id,
      methdo: 'DELETE',
      CONTENTtYPE: 'application/json',
      success: function(response) {
        console.log(response);
        $('#get-button').click();
      }
    })

  });


});


                    
   