particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 1262.6362266116362
            }
        },
        "color": {
            "value": "#af5900"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#af5900"
            },
            "polygon": {
                "nb_sides": 1
            },
            "image": {
                "src": "img/github.svg",
                "width": 500,
                "height": 500
            }
        },
        "opacity": {
            "value": 1.3,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.5,
                "sync": false
            }
        },
        "size": {
            "value": 2.0,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 5000,
                "size_min": 0.2,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 1.0,
            "width": 1,
        },
        "move": {
            "enable": true,
            "speed": 8,
            "direction": "top-right",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 2645.6299004281127,
                "rotateY": 3286.994724774322
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 323.67632367632365,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 779.2207792207791,
                "size": 71.92807192807193,
                "duration": 3.5964035964035963,
                "opacity": 1,
                "speed": 2
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;