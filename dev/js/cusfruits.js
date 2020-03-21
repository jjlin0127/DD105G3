        //養生指數
        Chart.defaults.global.legend.display = false;
        var ctx = document.getElementById('heyChart');

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
        }

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

        //------------------------------------------------------------

        // $(document).ready(function() {
        //     $('img.draggable').click(function(e) {
        //         var currentLink = $(this);

        //         // $('.droppedzone').empty() 
        //         // remove existing img/html, if added already
        //         //generate image tag on fly and assign src from current anchor clicked and add to div
        //         $('<img />').attr("src", $(currentLink).attr("src")).appendTo($('.droppedzone'));
        //         e.preventDefault();

        //     })
        // })

        window.addEventListener('load', function() {
            images = document.getElementsByClassName('draggable');
            for (let i = 0; i < images.length; i++) {
                images[i].addEventListener('dragstart', function(e) {
                    // let data = '<img src="./images/cusFruits/01_starFruit_c.png">';
                    let data = `${images[i]}`;
                    // let data = images[i].src;
                    // let data = i;
                    // console.log(images[i])
                    console.log(data)

                    e.dataTransfer.setData('image/*', data);
                });
            }

            droppedzones = document.getElementsByClassName('droppedzone');
            for (let j = 0; j < droppedzones.length; j++) {
                droppedzones[j].addEventListener('dragenter', function(e) {
                    e.preventDefault();
                })
                droppedzones[j].addEventListener('dragover', function(e) {
                    e.preventDefault();
                })
                droppedzones[j].addEventListener('drop', function(e) {
                    e.preventDefault();

                    // console.log(e.target.className);
                    // console.log(e.dataTransfer.getData('image/png'));


                    // var inputs = document.getElementsByTagName('input');
                    // test.src = e.dataTransfer.getData('image/png');
                    // this.insertBefore(test, input[j]);
                    this.innerHTML = e.dataTransfer.getData('image/*');

                    var test = document.createElement('img');
                    // e.dataTransfer.getData('text/plain');
                    // test.src = data;
                    // this.appendChild(test);

                    // e.target.appendChild(e.dataTransfer.getData('image/*'));
                })
            }
        })