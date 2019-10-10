(function($){

    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Genre : this["genre"].value,
        	DirectorName : this["director"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                //MovieStuff = data;
                //$(".movieData").empty();
                //console.log(data);
                populateMovieLibrary();
                //.then()

                // remove the existing table to avoid duplicate tables
                //populateTable();
                //$('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    function populateMovieLibrary(){
        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'get',    
            contentType: 'application/json',
            success: function( data, textStatus, jQxhr ){
                $("#my-form")[0].reset();
                $(".movieData").empty();
                $.each(data , function(index, value){
                    $('.movieData').append(
                        "<tr>" +
                        "<td>" + value.Title + "</td>" + 
                        "<td>" + value.DirectorName + "</td>" +
                        "<td>" + value.Genre + "</td>" +
                        // "<td><button id='updatemovie' class='btn-small' type='button' >Edit</button></td>" +
                        "</tr>");


                    console.log(value);
                })
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    }


    function editMovieLibrary(){
            $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'get',    
            contentType: 'application/json',
            success: function( data, textStatus, jQxhr ){
                $(".movieData").empty();
                $.each(data , function(index, value){
                    $('.movieData').append(
                        "<tr>" +
                        "<td class='movie-title' contenteditable='true'>" + value.Title + "</td>" + 
                        "<td class='movie-director' contenteditable='true'>" + value.DirectorName + "</td>" +
                        "<td class='movie-genre' contenteditable='true'>" + value.Genre + "</td>" +
                        "<td><button class='btn-small' type='submit' onclick='getMovie(" + value.Id + ")' >Update</button></td>" +
                        "</tr>");


                    console.log(value);
                })
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    }


    function updateMovieLibrary(){
        console.log('success');
        // $.ajax({
        //     // url: 'https://localhost:44352/api/movie/' + id,
        //     dataType: 'json',
        //     type: 'get',    
        //     contentType: 'application/json',
        //     success: function( data, textStatus, jQxhr ){
        //         console.log("success");
        //     },
        //     error: function( jqXhr, textStatus, errorThrown ){
        //         console.log( errorThrown );
        //     }
        // });
    }


    $('#my-form').submit( processForm );
    $('#getmovies').on('click', populateMovieLibrary);
    $('#editmovies').on('click', editMovieLibrary);
    $('#updatemovies').on('click', updateMovieLibrary);
})(jQuery);







