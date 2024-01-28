import './assets/css/progress.css';

export const StepProgressBar = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const bar = document.querySelector('#bar');
        // progress bar 라인 선택
        const steps = document.querySelectorAll('.progress-step');
        // progress bar 단계를 전체 선택 - 노드로 호출
        const btnPrev = document.querySelector('#prev');
        // 이전 버튼 선택
        const btnNext = document.querySelector('#next');
        // 다음 버튼 선택

        let currActive = 1;
        // 1단계로 초기화 설정

        btnNext.addEventListener("click", () => {
            // 다음 버튼 클릭 시 이벤트리스너
            currActive++;
            // 활성화 단계 수 추가

            if (currActive > steps.length) {
                // 활성화 단계 수가 총 단계 수를 넘어설 때,
            currActive = steps.length;
                // 활성화 단계 수를 총 단계 수와 같게 설정하여 예외 방지
            }

            updateSteps();
            // 아래 업데이트 펑션 불러오기
        });

        btnPrev.addEventListener("click", () => {
            // 이전 버튼을 클릭할 시 이벤트리스너
            currActive--;
            // 클릭할 때마다 활성화 단계 수를 줄임

            if (currActive < 1) {
                // 활성화 단계 수가 1보다 작아질 때
                currActive = 1;
                // 1로 설정하여 예외 방지
            }

            updateSteps();
            // 아래 업데이트 펑션 불러오기
        });

        const updateSteps = () => {
            // 프로그레스 바의 상태를 업데이트
            steps.forEach((step, index) => {
                // 각 단계를 반복함 단계와 각 인덱스를 변수로 사용
                if (index < currActive) step.classList.add("active");
                // 활성화된 단계보다 작은 인덱스를 갖는 단계는 active 클래스 추가
                else step.classList.remove("active");
                // 나머지는 active 클래스 제거
            });

            const actives = document.querySelectorAll(".active");
            // active 클래스 모든 요소를 선택하여 actives 변수로 저장

            bar.style.width = ((actives.length - 1) / (steps.length - 1)) * 100 + "%";
            // bar의 너비를 계산하여 업데이트, active 클래스가 지정된 단계의 수를 전체 단계의 수로 나눈 비율을 계산하여 백분율로 변환
            // 프로그레스 바의 넓이를 설정한다.
            if (currActive === 1) btnPrev.disabled = true;
            // 현재 단계가 첫번째 단계이면 이전 버튼을 비활성화
            else if (currActive === steps.length) btnNext.disabled = true;
            // 현재 단계가 마지막 단계이면 다음 버튼을 비활성화
            else {
                // 그렇지 않은 경우, 두 버튼 모두 활성화 상태로 유지
                btnNext.disabled = false;
                btnPrev.disabled = false;
            }
        }
    });

    return (
        '<div class="container">' +
            '<div class="progress-container">' +
                '<div class="progress-bar" id="bar"></div>' +
                '<div class="progress-step active">1</div>' +
                '<div class="progress-step">2</div>' +
                '<div class="progress-step">3</div>' +
                '<div class="progress-step">4</div>' +
            '</div>' +
            '<button type="button" class="btn" id="prev" disabled>Prev</button>' +
            '<button type="button" class="btn" id="next">Next</button>' +
        '</div>'
    );
};
