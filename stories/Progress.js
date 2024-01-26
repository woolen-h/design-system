import './assets/css/progress.css';

export const StepProgressBar = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const bar = document.querySelector('#bar');
        const steps = document.querySelectorAll('.progress-step');
        const btnPrev = document.querySelector('#prev');
        const btnNext = document.querySelector('#next');

        let currActive = 1;

        btnNext.addEventListener("click", () => {
            currActive++;

            if (currActive > steps.length) {
            currActive = steps.length;
            }

            updateSteps();
        });

        btnPrev.addEventListener("click", () => {
            currActive--;

            if (currActive < 1) {
                currActive = 1;
            }

            updateSteps();
        });

        const updateSteps = () => {
            steps.forEach((step, index) => {
                if (index < currActive) step.classList.add("active");
                else step.classList.remove("active");
            });

            const actives = document.querySelectorAll(".active");

            bar.style.width = ((actives.length - 1) / (steps.length - 1)) * 100 + "%";

            if (currActive === 1) btnPrev.disabled = true;
            else if (currActive === steps.length) btnNext.disabled = true;
            else {
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
