    // -------   Mail Send ajax
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event

        $('#myForm').submit(function (e) {
          let currentform = $(e.currentTarget)
          let alert = currentform.find('.alert-msg')
          let submit = currentform.find('.submit-btn')
          e.preventDefault();
            let formData = $('#myForm').serialize()
              $.ajax({
                type: 'POST',
                url: 'mail.php?type=1',
                data: formData,
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    console.log('ok');
                    alert.html(data).fadeIn(); // fade in response data
                    currentform.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important"); // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
              });
              return false;
          });
        $('#sub').submit(function (e) {
          let currentform = $(e.currentTarget)
          let alert = currentform.find('.alert-msg')
          let submit = currentform.find('.submit-btn')
          e.preventDefault();
          let formData = $('#sub').serialize()
          let email = $('#sub').find('input[name="email"]').val()
          if (email) {
            $.ajax({
              type: 'POST',
              url: 'mail.php?type=2',
              data: formData,
              beforeSend: function () {

                alert.fadeOut();
                submit.html('Sending....'); // change submit button text
              },
              success: function (data) {
                console.log('ok');
                alert.html(data).fadeIn(); // fade in response data
                currentform.trigger('reset'); // reset form
                submit.attr("style", "display: none !important");

              },
              error: function (e) {
                console.log(e)
              }
            });
          }
          return false;
        });

    //     form.on('submit', function(e) {
    //         e.preventDefault(); // prevent default form submit

    //         $.ajax({
    //             url: 'mail.php', // form action url
    //             type: 'POST', // form submit method get/post
    //             dataType: 'html', // request type html/json/xml
    //             data: form.serialize(), // serialize form data
    //             beforeSend: function() {
    //                 alert.fadeOut();
    //                 submit.html('Sending....'); // change submit button text
    //             },
    //             success: function(data) {
    //                 alert.html(data).fadeIn(); // fade in response data
    //                 form.trigger('reset'); // reset form
    //                 submit.attr("style", "display: none !important");; // reset submit button text
    //             },
    //             error: function(e) {
    //                 console.log(e)
    //             }
    //         });
    //     });
    // });