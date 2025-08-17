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

    const ctx = document.getElementById('leetCodeChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Easy', 'Medium', 'Hard'],
                datasets: [{
                    label: 'Problems Solved',
                    data: [693, 415, 16],
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
            },
            options: {
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
            }
        });
    }

    const textElement = document.getElementById('typewriter-text');
    const cursorElement = document.querySelector('.cursor');
    const textToType = "Python Backend Engineer";
    let index = 0;

    if (textElement && cursorElement) {
        textElement.textContent = ''; 
        cursorElement.style.display = 'inline-block';

        function type() {
            if (index < textToType.length) {
                textElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(type, 120); 
            } else {
                cursorElement.style.animation = 'none'; 
                cursorElement.style.opacity = 1;
            }
        }
        setTimeout(type, 500); 
    }
});