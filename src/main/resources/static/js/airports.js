

var boton = document.getElementById('citySearch');
boton.addEventListener('click', function (e) {
    e.preventDefault()

    //https://willson-melo-arsw-t2.herokuapp.com/airports/
    //http://localhost:8080/airports/
    axios.get('https://willson-melo-arsw-t2.herokuapp.com/airports/' + document.getElementById('cityName').value)
        .then(response => {
            console.log(response)
            mydata = response.data;
            // $('#table1').bootstrapTable({
            //     data: mydata
            // });
            console.log(mydata);

            $("#airportsTable tbody").empty();
            mydata.forEach(airport => {
                $('#airportsTable tbody').append(`
            <tr>
                <td>` + airport.city + `</td>    
                <td>` + airport.code + `</td>
                <td>` + airport.name + `</td>
                <td>` + airport.location.latitude + `</td>
                <td>` + airport.location.longitude + `</td>
            </tr>
            `)
            });
            
          
        })
        
        .catch(e => {
            // Capturamos los errores
        })




})



