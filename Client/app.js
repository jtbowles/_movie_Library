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
                        "</tr>");


                    console.log(value);
                })



                // console.log(data);
                // console.log('success');

                // $.each(data, function(i , element){
                //     table.append(`<tr id="row${element.MovieId}">
                //     <td contenteditable id="title${element.MovieId}"'>${element.Title}
                //    </td><td contenteditable id="director${element.MovieId}">${element.Director}
                //    </td><td contenteditable id="genre${element.MovieId}">${element.Genre}</td>
                //    <td><button onclick="SubmitEdit(${element.MovieId})" class="btn btn-link"
                //    id="${element.MovieId}" type="submit">Update</button></td></tr>`)
                // });

                //console.log('success');

            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    }


    $('#my-form').submit( processForm );
    $('#getmovies').on('click', populateMovieLibrary);
})(jQuery);







