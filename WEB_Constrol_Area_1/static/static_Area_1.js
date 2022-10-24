$("#body").on("click", ".btn-on-Are-1", function(){
    console.log("On Click");
    let id_Area_1 = $(this).attr("data-sid-Arae-1");
    // console.log(id);
    let csrf_Area_1 = $("input[name=csrfmiddlewaretoken]").val();
    mydata = {sid_Area_1:id_Area_1, csrfmiddlewaretoken:csrf_Area_1};
    $.ajax({
        url: "On_Click/",
        method: "POST",
        data: mydata,
        dataType: 'json',
        success: function(data){
            // console.log(data.status);
            if(data.status == 'On_Click')
            {
                // console.log('ON SUCCESS')
                GetJSON()
            }
            if(data.status == 'Err')
            {
                console.log('ERROR')
            }
        },
    });
});

$("#body").on("click", ".btn-off-Are-1", function(){
    // console.log('OFF')
    let id_Area_1 = $(this).attr("data-sid-Arae-1");
    let csrf_Area_1 = $("input[name=csrfmiddlewaretoken]").val();
    mydata = {sid_Area_1:id_Area_1, csrfmiddlewaretoken:csrf_Area_1};
    $.ajax({
        url: "Off_Click/",
        method: "POST",
        data: mydata,
        dataType: 'json',
        success: function(data){
            if(data.status == 'Off_Click')
            {
                // console.log('Tắt thành công')
                GetJSON()
            }
            if(data.status == 'ERR')
            {
                console.log('ERROR')
            }
        },
    });
});