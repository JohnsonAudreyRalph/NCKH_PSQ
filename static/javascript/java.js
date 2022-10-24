const IP = "http://127.0.0.1:8000/"
function GetJSON()
{
    const ON = "https://banner2.cleanpng.com/20180403/giw/kisspng-green-light-green-light-traffic-light-clip-art-light-circle-5ac441520557b0.7741665015228112180219.jpg"
    const OFF = "https://e7.pngegg.com/pngimages/150/578/png-clipart-traffic-light-computer-icons-red-red-light-color-light.png"
    
    curl_Area_1 = IP + "WEB_Area_1/Get_JSON/"
    curl_Area_2 = IP + "WEB_Area_2/Get_JSON/"


    fetch(curl_Area_1)
        .then(response => response.json()) // converts the response to JSON
        .then(Area_1 => {
            console.log(Area_1);
            TB_1_Area_1 = Area_1.ID_1.STATUS
            console.log("Trạng thái thiết bị 1: " + TB_1_Area_1);
            if(TB_1_Area_1 == 0)
            {
                document.getElementById("Area_1_ID_01").src = OFF
            }
            if(TB_1_Area_1 == 1)
            {
                document.getElementById("Area_1_ID_01").src = ON
            }

            TB_2_Area_1 = Area_1.ID_2.STATUS
            console.log("Trạng thái thiết bị 2: " + TB_2_Area_1)
            if(TB_2_Area_1 == 0)
            {
                document.getElementById("Area_1_ID_02").src = OFF
            }
            if(TB_2_Area_1 == 1)
            {
                document.getElementById("Area_1_ID_02").src = ON
            }
            TB_3_Area_1 = Area_1.ID_3.STATUS
            console.log("Trạng thái thiết bị 3: " + TB_3_Area_1);
            if(TB_3_Area_1 == 0)
            {
                document.getElementById("Area_1_ID_03").src = OFF
            }
            if(TB_3_Area_1 == 1)
            {
                document.getElementById("Area_1_ID_03").src = ON
            }
            TB_4_Area_1 = Area_1.ID_4.STATUS
            console.log("Trạng thái thiết bị 4: " + TB_4_Area_1);
            if(TB_4_Area_1 == 0)
            {
                document.getElementById("Area_1_ID_04").src = OFF
            }
            if(TB_4_Area_1 == 1)
            {
                document.getElementById("Area_1_ID_04").src = ON
            }
            TB_5_Area_1 = Area_1.ID_5.STATUS
            console.log("Trạng thái thiết bị 5: " + TB_5_Area_1);
            if(TB_5_Area_1 == 0)
            {
                document.getElementById("Area_1_ID_05").src = OFF
            }
            if(TB_5_Area_1 == 1)
            {
                document.getElementById("Area_1_ID_05").src = ON
            }
            TB_6_Area_1 = Area_1.ID_6.STATUS
            console.log("Trạng thái thiết bị 6: " + TB_6_Area_1);
            if(TB_6_Area_1 == 0)
            {
                document.getElementById("Area_1_ID_06").src = OFF
            }
            if(TB_6_Area_1 == 1)
            {
                document.getElementById("Area_1_ID_06").src = ON
            }
            TB_7_Area_1 = Area_1.ID_7.STATUS
            console.log("Trạng thái thiết bị 7: " + TB_7_Area_1);
            if(TB_7_Area_1 == 0)
            {
                document.getElementById("Area_1_ID_07").src = OFF
            }
            if(TB_7_Area_1 == 1)
            {
                document.getElementById("Area_1_ID_07").src = ON
            }
        });
    

    fetch(curl_Area_2)
        .then(response => response.json())
        .then(Area_2 => {
            console.log(Area_2)
            TB_1_Area_2 = Area_2.ID_1.STATUS
            console.log("Trạng thái thiết bị 1: " + TB_1_Area_2);
            if(TB_1_Area_2 == 0)
            {
                document.getElementById("Area_2_ID_01").src = OFF
            }
            if(TB_1_Area_2 == 1)
            {
                document.getElementById("Area_2_ID_01").src = ON
            }
            TB_2_Area_2 = Area_2.ID_2.STATUS
            console.log("Trạng thái thiết bị 2: " + TB_2_Area_2);
            if(TB_2_Area_2 == 0)
            {
                document.getElementById("Area_2_ID_02").src = OFF
            }
            if(TB_2_Area_2 == 1)
            {
                document.getElementById("Area_2_ID_02").src = ON
            }
            TB_3_Area_2 = Area_2.ID_3.STATUS
            console.log("Trạng thái thiết bị 3: " + TB_3_Area_2);
            if(TB_3_Area_2 == 0)
            {
                document.getElementById("Area_2_ID_03").src = OFF
            }
            if(TB_3_Area_2 == 1)
            {
                document.getElementById("Area_2_ID_03").src = ON
            }
            TB_4_Area_2 = Area_2.ID_4.STATUS
            console.log("Trạng thái thiết bị 4: " + TB_4_Area_2);
            if(TB_4_Area_2 == 0)
            {
                document.getElementById("Area_2_ID_04").src = OFF
            }
            if(TB_4_Area_2 == 1)
            {
                document.getElementById("Area_2_ID_04").src = ON
            }
            TB_5_Area_2 = Area_2.ID_5.STATUS
            console.log("Trạng thái thiết bị 5: " + TB_5_Area_2);
            if(TB_5_Area_2 == 0)
            {
                document.getElementById("Area_2_ID_05").src = OFF
            }
            if(TB_5_Area_2 == 1)
            {
                document.getElementById("Area_2_ID_05").src = ON
            }
        });
}