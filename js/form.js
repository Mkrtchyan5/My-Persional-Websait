$(function() {
    
    $('input[name=num]').mask("+(999) 99-99-99-99")
    
    

    
    $('.ajax-form').on('submit', function (e) {
        e.preventDefault();
        
        //get data
        var form = $(this),
            btn = form.find('button[type=submit]'),
            mess = form.find('.messages'),
            
            
            
            name = form.find('input[name=name]').val(),
            email = form.find('input[name=email]').val(),
            numb = form.find('input[name=num').val();

        var formData = new FormData(form[0]);
        
        
        
        
        
        //check data
        if (name == '') {
            mess.html('<p class="color_false">Please Enter Your Name</p>');
            return false;
        }
        if (email == '') {
            mess.html('<p class="color_false">Please Enter Your Email</p>');
            return false;
        }
        if(numb == '') {
            mess.html('<p class="color_false">Please Enter Your Phone</p>');
            return false;
        }
        
        //send data 
        
        $.ajax ({
            url: 'https://weber.am/server.php',
            type: 'post',
//            data: {
//                name: name,
//                email: email,
//                num: num,
//                pass: password,
//                pass_conf: pass_conf,
//                quantity: selec,
//            },
            data: formData,
			cache: false,
			contentType: false,
			processData: false,
            beforeSend: function () {
            mess.html('<p class="color_p2">Please Wait</p>');
                btn.prop('disabled', true);
            },
            success: function (data) {
                setTimeout(function () {
                    mess.html('<p class="color_p3 class="color_p1"">Forum Completed Successfully</p>')
                }, 500)
            } 
        })
    });
});