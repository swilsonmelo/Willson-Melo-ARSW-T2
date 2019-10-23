

var boton = document.getElementById('citySearch');
boton.addEventListener('click', function () {

    //https://peaceful-hollows-83852.herokuapp.com/airports/berlin
    axios.get('https://peaceful-hollows-83852.herokuapp.com/airports/'+document.getElementById('cityName').value)
        .then(response => {
            console.log(response)
            mydata = response.data;
            // $('#table1').bootstrapTable({
            //     data: mydata
            // });
            console.log(mydata);
            mydata.forEach(airport => {
                $('#airportsTable').append(`
            <tr>    
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
