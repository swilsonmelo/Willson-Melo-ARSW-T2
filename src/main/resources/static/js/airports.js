axios.get('https://peaceful-hollows-83852.herokuapp.com/airports/berlin')
    .then(response => {
        mydata = response.data;
        mydata = mydata._embedded.userList;
        // $('#table1').bootstrapTable({
        //     data: mydata
        // });
        console.log(mydata);
        mydata.forEach(employee => {
            $('#airportsTable').append(`
                <tr>    
                    <td>` + 1 + `</td>
                    <td>` + 2 + `</td>
                    <td>` + 3 + `</td>
                    <td>` + 4 + `</td>
                </tr>
            `)
        });
    })
    .catch(e => {
        // Capturamos los errores
    })