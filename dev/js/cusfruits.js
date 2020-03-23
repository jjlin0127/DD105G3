//養生指數
Chart.defaults.global.legend.display = false;
var ctx = document.getElementById('heyChart');

// data-pointa='幫助消化' 
// data-pointb='活化大腦' 
// data-pointc='保護血管'
data = {
  labels: ['幫助消化', '活化大腦', '保護血管'],
  datasets: [
    {
      backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)'
      ],
      data: [3, 2, 1]
    }
  ]
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
  ctx,
  {
    type: 'radar',
    data: data,
    options: options
  }
);

//----------------------------------------

//選購過程
var state = {
  selectedFruits: [],
}
var newImg = document.createElement('img');

$(document).ready(function() {
  $('[data-fruit]').click(function(e) {
    var fruitId = e.target.getAttribute('data-fruit');
    var src = e.target.getAttribute('src'); // "/build/images/foo.png"
    newImg.src = src;
    newImg.dataFruit = fruitId;
    state.selectedFruits.push(fruitId);
    updateItemTotal()

    $('#selectedTable').append(
      `<tr>
         <td>
           <img class="shown" src="${newImg.src}" data-fruit="${newImg.dataFruit}">  
         </td>
         <td class="droppedzone">
           <input type="reset" value="移除" class="btn_s" data-btn="${newImg.dataFruit}">
         </td>
       </tr>`
    );

    $(`[data-btn="${newImg.dataFruit}"]`).click(removeNewImg);
  })

  function removeNewImg(e) {
    e.preventDefault();

    toBeRemovedFruitId = $(this).attr('data-btn');
    itemIndex = state.selectedFruits.indexOf(toBeRemovedFruitId);
    state.selectedFruits.splice(itemIndex, 1);

    updateItemTotal()

    $(this).parent('td').parent('tr').remove();
  }

  function updateItemTotal() {
    $('#items').text(state.selectedFruits.length);
  }
})
            
//----------------------------------------