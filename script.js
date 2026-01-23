document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.resume-section');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });


    const leetCodeData = {
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [{
            label: 'Problems Solved',
            data: [738, 449, 19],
            backgroundColor: [
                'rgba(40, 167, 69, 0.7)',
                'rgba(255, 193, 7, 0.7)',
                'rgba(220, 53, 69, 0.7)'
            ],
            borderColor: [
                'rgba(40, 167, 69, 1)',
                'rgba(255, 193, 7, 1)',
                'rgba(220, 53, 69, 1)'
            ],
            borderWidth: 1
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed;
                        }
                        return label;
                    }
                }
            }
        }
    };


    const ctxZh = document.getElementById('leetCodeChart');
    if (ctxZh) {
        new Chart(ctxZh, {
            type: 'doughnut',
            data: leetCodeData,
            options: chartOptions
        });
    }


    const ctxEn = document.getElementById('leetCodeChartEn');
    if (ctxEn) {
        new Chart(ctxEn, {
            type: 'doughnut',
            data: leetCodeData,
            options: chartOptions
        });
    }

  
    function typewriter(textElement, textToType) {
        let index = 0;
        textElement.textContent = '';
        const cursorElement = textElement.nextElementSibling;

        if (cursorElement) {
            cursorElement.style.display = 'inline-block';
        }

        function type() {
            if (index < textToType.length) {
                textElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(type, 120);
            } else if (cursorElement) {
                cursorElement.style.animation = 'none';
                cursorElement.style.opacity = 1;
            }
        }
        setTimeout(type, 500);
    }


    const textElementZh = document.getElementById('typewriter-text-zh');
    if (textElementZh) {
        typewriter(textElementZh, "Python Developer");
    }


    const textElementEn = document.getElementById('typewriter-text-en');
    if (textElementEn) {
        typewriter(textElementEn, "Python Developer");
    }
});