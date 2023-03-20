$(function () {

    // 1. 일정한 시간마다
    // 1.1. #slide 요소를 사진 한 장의 너비(#container 요소 너비의 1/3)만큼 왼쪽으로 잉동
    // 1.2. #slide 요소의 움직임이 끝나면
    // 1.3. #slide 요소에 설정했던 스타일 속성을 제거하고
    // 1.4. #slide 요소의 첫 번째 자식 요소를 #slide 요소의 마지막으로 옮긴다.
    // 2. #container 요소의 영역에 마우스 포인터가 들어가면
    // 2.1. #slide 요소의 움직임을 멈추게 한다.
    // 3. #container 요소의 영역에서 마우스 포인터가 빠져나가면
    // 3.1. #slide 요소가 다시 움직이도록 한다.

    var $slide = $("#slide");

    // 1. 일정한 시간마다
    var timerId = window.setInterval(slideImage, 2000);

    $("#container").hover(
        // 2. #container 요소의 영역에 마우스 포인터가 들어가면
        function () {
            // 사진들을 살짝 크게 했다가 다시 본래 크기로 되돌린다.
            // $slide.find("img").stop().animate({ width: "95%" }, 200)
            //      .animate({ width: "92%" }, 200);
            $slide.addClass("dudung").delay(400).queue(function () {
                // 다음에 다시 사진이 커지는 효과를 실행시키기 위해 class 속성 제거
                $slide.removeClass("dudung").dequeue();   
            });

            // jQuery의 delay, queue, dequeue 메서드를 이용해 setTimeout 메서드로 등록하는
            // 타이머를 계산할 수 있다.

            // window.setTimeout(function () {
            //      이 함수는 setTimeout 메서드로 등록한 타이머에 의해 400ms가 지난 후에 실행
            //      $slide.removeClass("dudung");
            // }, 400);

            // 2.1. #slide 요소의 움직임을 멈추게 한다.
            window.clearInterval(timerId);
        },

        // 3. #container 요소의 영역에서 마우스 포인터가 빠져나가면
        function () {
            // 3.1. #slide 요소가 다시 움직이도록 한다.
            timerId = window.setInterval(slideImage, 2000);
        }
    );

    // 타이머에 의해 실행될 함수를 선언
    function slideImage() {
        $slide.animate({ "margin-left": "-33.33%" }, function () {
            // callback 함수: 지정한 효과가 끝나면 실행할 기능
            // 1.2. #slide 요소의 움직임이 끝나면

            // 1.3. #slide 요소에 설정했던 스타일 속성을 제거하고
            // 1.4. $slide 요소의 첫 번째 자식 요소를 #slide 요소의 마지막으로 옮긴다.
            $slide.removeAttr("style").children(":first").appendTo($slide);
        })
    }
});