$("body").on("click", ".btn-on", function(){
    // console.log("Con 2 Click")
    let id_Area_2 = $(this).attr("data-sid-Arae-2");
    let csrf_Area_2 = $("input[name=csrfmiddlewaretoken]").val();
    // console.log(id_Area_2)
    mydata = {sid_Area_2:id_Area_2, csrfmiddlewaretoken:csrf_Area_2}
    $.ajax({
        url: "On_Click/",
        method : "POST",
        data: mydata,
        dataTyle: "json",
        success: function(data){
            console.log(data.status)
            if(data.status == 'On__Click')
            {
                // alert('Đã bật thiết bị ' + id_Area_2)
                GetJSON()
            }
            if(data.status == 'err')
            {
                alert('ERROR')
            }
        },
    });
});

$("body").on("click", ".btn-off", function(){
    let id_Area_2 = $(this).attr("data-sid-Arae-2")
    // alert("Off Click " + id_Area_2)
    let csrf_Area_2 = $("input[name=csrfmiddlewaretoken]").val();
    mydata = {sid_Area_2:id_Area_2, csrfmiddlewaretoken:csrf_Area_2}
    $.ajax({
        url: "Off_Click/",
        method: "POST",
        data: mydata,
        dataTyle: 'json',
        success: function(data){
            console.log(data.status)
            if(data.status == 'Off__Click')
            {
                // alert("Đã tắt thiết bị " + id_Area_2)
                GetJSON()
            }
            if(data.status == 'err')
            {
                alert('ERROR')
            }
        },
    });
});