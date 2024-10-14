var typed = new Typed(".typing", {
    strings: ["", "Fullstack Developer", "Android Developer", "Frontend", "Backend"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li:not(.non-nav-item)"), // Exclude new element
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let index = 0; index < totalNavList; index++) {
    const a = navList[index].querySelector("a")
    a.addEventListener("click", function () {

        removeBackSection()

        for (let j = 0; j < totalNavList; j++) {

            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j)
                // allSection[j].classList.add("back-section")
            }

            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this)

        if (window.innerWidth < 1200) {
            asideSectionTogglerButton()
        }
    })

}

function addBackSection(j) {
    allSection[j].classList.add("back-section")
}

function removeBackSection() {
    for (let index = 0; index < totalSection; index++) {
        allSection[index].classList.remove("back-section")
    }
}

function showSection(element) {
    for (let index = 0; index < totalSection; index++) {
        allSection[index].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1]
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let index = 0; index < totalNavList; index++) {
        navList[index].querySelector("a").classList.remove("active")
        const target = element.getAttribute("href").split("#")[1]
        if (target === navList[index].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[index].querySelector("a").classList.add("active")
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index")
    showSection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})

const navTogglerButton = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerButton.addEventListener("click", () => {
    asideSectionTogglerButton();
})

function asideSectionTogglerButton() {
    aside.classList.toggle("open")
    navTogglerButton.classList.toggle("open")

    for (let index = 0; index < totalSection; index++) {
        allSection[index].classList.toggle("open")

    }
}


// ------------------------- Search skill logic
document.getElementById('search').addEventListener('input', function () {
    let filter = this.value.toLowerCase();
    let skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        if (skill.textContent.toLowerCase().includes(filter)) {
            skill.style.display = 'inline-block';
        } else {
            skill.style.display = 'none';
        }
    });
});


// --------------------------

const portfolioData = [
    {
        'company': 'Nakayama Ltd.',
        'projectName': 'Energy Monitoring System',
        'periode': '',
        'stack': [
            "#php",
            "#Javascript",
            "#ChartJs"
        ],
        'status': "unpublished / internal company",
        'projectReview': 'Developed an interactive website for Nakayama Company to showcase electrical energy usage data, utilizing PHP and the ChartJS library for dynamic and engaging visualizations. This solution provides real-time insights into energy consumption, enabling informed decision-making for efficient energy management',
        'projectFootage': [
            "assets/ems/ems-1.jpg",
            "assets/ems/ems-2.jpg",
            "assets/ems/ems-3.jpg",
            "assets/ems/ems-4.jpg",
            "assets/ems/ems-5.jpg",
        ]
    },
    {
        'company': 'Nakayama Ltd.',
        'projectName': 'MSD700',
        'periode': '',
        'stack': [
            "#NextJS",
            "#Typescript",
            "#ROS",
        ],
        'status': "unpublished / internal company",
        'projectReview': 'Crafted an innovative website using Next.js and the ROS2D library, designed to display the real-time location and facilitate remote control of robots. This cutting-edge platform combines interactive mapping with intuitive control features, offering seamless operation and monitoring capabilities for robotic systems.',
        'projectFootage': [
            "assets/msd700/msd-4.png",
            "assets/msd700/msd-2.png",
            "assets/msd700/msd-7.png",
            "assets/msd700/msd-3.png",
            "assets/msd700/msd-5.png",
            "assets/msd700/msd-6.png",
            "assets/msd700/msd-1.png",
        ]
    },
    {
        'company': 'Cakra Motor company',
        'projectName': 'Freelancer Frontend Developer',
        'periode': '',
        'stack': [
            "#ReactJs",
            "#HBS",
            "#Postgress"
        ],
        'status': "unpublished / internal company",
        'projectReview': 'Responsible for developing item bundling features from existing database items and creating synchronization features between company data items and those in marketplaces like Tokopedia, Shopee, and Bukalapak.',
        'projectFootage': [
            "assets/frontend.png",
        ]
    },
    {
        'company': 'Personal Project',
        'projectName': 'LuxSpace - E-commerce PWA',
        'periode': '',
        'stack': [
            "#PWA",
            "#Javascript",
            "#Vercel",
            "#Service Workers",
            "#Tailwind"
        ],
        'status': "https://porto-luxspace-pwa.vercel.app/",
        'projectReview': 'Developed a responsive e-commerce website with Progressive Web App (PWA) capabilities to deliver a seamless online shopping experience. The platform ensures fast load times, offline functionality through service workers, and optimized performance across devices. Hosted on Vercel, it leverages Tailwind CSS for modern UI design, ensuring an intuitive and visually appealing shopping interface.',
        'projectFootage': [
            "assets/luxspace/luxspace-1.png",
            "assets/luxspace/luxspace-2.png",
            "assets/luxspace/luxspace-3.png",
            "assets/luxspace/luxspace-4.png",
            "assets/luxspace/luxspace-5.png",
            "assets/luxspace/luxspace-6.png"
        ]
    }

];


const portfolioItemsContainer = document.querySelector('.portfolio-items');

let portfolioItemsHTML = '';

for (let index = 0; index < portfolioData.length; index++) {
    const portfolioItemTemplate = `
      <div class="portfolio-item padd-15" data-index="${index}">
        <div class="portfolio-item-inner shadow-dark">
          <div class="portfolio-img">
            <img src="${portfolioData[index].projectFootage[0]}" alt="" />
          </div>
        </div>
      </div>
    `;
    portfolioItemsHTML += portfolioItemTemplate;
}

portfolioItemsContainer.innerHTML = portfolioItemsHTML;

const portfolioItems = document.querySelectorAll('.portfolio-item');
const detailDiv = document.querySelector('.portfolio-item-detail');
const closeButton = detailDiv.querySelector('.close-detail');
const projectName = detailDiv.querySelector('.project-name');
const projectReview = detailDiv.querySelector('.project-review');
const companyName = detailDiv.querySelector('.company-name');
const slidesContainer = detailDiv.querySelector('.slides');
const stackContainer = detailDiv.querySelector('.container-project-stack'); // Target stack container

const prevButton = detailDiv.querySelector('.prev');
const nextButton = detailDiv.querySelector('.next');

let currentSlideIndex = 0;

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const index = item.dataset.index;
        const project = portfolioData[index];

        projectName.textContent = project.projectName;
        projectReview.textContent = project.projectReview;
        companyName.textContent = project.company;

        const statusLink = detailDiv.querySelector('.status-link');
        statusLink.textContent = project.status; // Set the status text

        // Check if the status is a valid URL or "unpublished/internal"
        const isValidUrl = project.status.startsWith("http") || project.status.startsWith("https");
        const isInternalOrUnpublished = project.status.toLowerCase() === "unpublished" || project.status.toLowerCase() === "internal";

        if (isInternalOrUnpublished) {
            // If the status is internal or unpublished
            statusLink.href = "#"; // Disable link
            statusLink.style.pointerEvents = "none"; // Disable click
            statusLink.style.color = "gray"; // Change color to indicate it's disabled
        } else if (isValidUrl) {
            // If the status is a valid URL
            statusLink.href = project.status; // Set the href to the project status if it’s a link
            statusLink.target = "_blank"; // Open link in a new tab
            statusLink.style.pointerEvents = "auto"; // Enable click
            statusLink.style.color = ""; // Reset color if enabled
        } else {
            // If the status is neither a URL nor a specific state
            statusLink.href = "#"; // No link if the status is not a URL
            statusLink.style.pointerEvents = "none"; // Disable click
            statusLink.style.color = "gray"; // Change color to indicate it's disabled
        }

        // Clear existing slides and stack content
        slidesContainer.innerHTML = '';
        stackContainer.innerHTML = ''; // Clear previous stack entries
        currentSlideIndex = 0;

        // Populate slides with project footage
        project.projectFootage.forEach((imgSrc, idx) => {
            slidesContainer.innerHTML += `<img src="${imgSrc}" alt="Slide ${idx + 1}" style="display: ${idx === 0 ? 'block' : 'none'};">`;
        });

        // Populate the stack container with technology tags
        project.stack.forEach(stackItem => {
            const span = document.createElement('span');
            span.className = 'skill'; // Optional CSS class for styling
            span.textContent = stackItem;
            stackContainer.appendChild(span);
        });

        detailDiv.classList.remove('hidden');
        detailDiv.style.display = 'block';
    });
});


prevButton.addEventListener('click', () => {
    showSlides(currentSlideIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlides(currentSlideIndex + 1);
});

function showSlides(index) {
    const slides = slidesContainer.querySelectorAll('img');
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    slides.forEach((slide, idx) => {
        slide.style.display = idx === currentSlideIndex ? 'block' : 'none';
    });
}

closeButton.addEventListener('click', () => {
    detailDiv.classList.add('hidden');
    detailDiv.style.display = 'none';
    projectName.textContent = '';
    projectReview.textContent = '';
    companyName.textContent = '';
    slidesContainer.innerHTML = '';
});

//----------------------------- EMAIL HANDLER
function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    emailjs.send('service_smayihj', 'template_k592ylu', templateParams).then(
        (response) => {
            alert("Message Sended!")
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
}