//養生指數
Chart.defaults.global.legend.display = false;
var ctx = document.getElementById('heyChart');

// data-pointa='幫助消化' 
// data-pointb='活化大腦' 
// data-pointc='保護血管'
data = {
    labels: ['幫助消化', '活化大腦', '保護血管'],
    datasets: [{
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        data: [3, 2, 1]
    }]
};

options = {
    scale: {
        angleLines: {
            display: true //連到三角形三點的直線
        },
        ticks: {
            beginAtZero: true,
            maxTicksLimit: 7,
            suggestedMin: 0,
            suggestedMax: 1,
        },
        gridLines: {
            display: true,
            circular: true,
        },
        pointLabels: {
            fontSize: 18,
            fontColor: ['#20B2AA', '#F4A460', '#FF6347'],
            fontFamily: 'Noto Sans TC',
        }
    }
};

var heyChart = new Chart(
    ctx, {
        type: 'radar',
        data: data,
        options: options
    });

//----------------------------------------

//選購過程
var state = {
    selectedFruits: [],
}
var newImg = document.createElement('img');

$(document).ready(function() {
    $('[data-fruit]').click(function(e) {
        // 綁事件
        var fruitId = e.target.getAttribute('data-fruit');
        var src = e.target.getAttribute('src'); // "/build/images/foo.png"
        newImg.src = src;
        newImg.dataFruit = fruitId;
        // 在#selectedTable 裡面加上 tr>td>img; img的src 為剛剛抓的 src
        $('#selectedTable').append(`
                    <tr>
                        <td>
                            <img class="shown" src="${newImg.src}" data-fruit="${newImg.dataFruit}">  
                        </td>
                        <td class="droppedzone">
                            <input type="reset" value="移除" class="btn_s" data-fruit="${newImg.dataFruit}">
                        </td>
                    </tr>`);
        state.selectedFruits.push(fruitId);
        console.log(state.selectedFruits);
        $('#items').text(state.selectedFruits.length)
        $('[type="reset"]').click(removenewImg);
    })

    // var removedImg


    function removenewImg() {
        // var removedItem = 0
        $(this).parents('tr').remove();

        btnData = $(this).attr("data-fruit");
        console.log(btnData);
        removedItem = state.selectedFruits.indexOf(btnData);
        console.log(removedItem); //console.log會回傳splice兩次的結果
        state.selectedFruits = state.selectedFruits.splice(removedItem, 1);
        // if (removedItem > -1) {}
        // console.log(state.selectedFruits);
    }


})

//----------------------------------------