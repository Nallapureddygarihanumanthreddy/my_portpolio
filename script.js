// Summary
document.getElementById("summary").textContent =
  "Results-driven Electronics & Communication Engineering graduate with experience in VLSI design, FinFET technology, AI systems, and cloud platforms. Adept in Python, MySQL, and web development with HTML/CSS. Committed to delivering innovative and high-quality engineering solutions.";

// Education
const educationList = [
  "B.Tech in Electronics & Communication Engineering, KSRM College of Engineering (2021–2025) – CGPA: 7.2, Kadapa",
  "Intermediate, Sri Chaitanya Junior College (2019–2021) – Marks: 685, Kadapa",
  "SSC, Raju High School (2018–2019) – Grade: 7.5, Kadapa"
];

const educationUl = document.getElementById("education");
educationList.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  educationUl.appendChild(li);
});

// Skills
const skills = [
  "Programming Languages: Python, Java (Basics)",
  "Web Development: HTML, CSS",
  "Database: MySQL"
];

const skillsUl = document.getElementById("skills");
skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsUl.appendChild(li);
});

// Projects
const projects = [
  {
    title: "Real-Time People Counting and Tracking Using NVIDIA Jetson Nano",
    details: [
      "Developed a deep learning-based system to detect and count people in real time.",
      "Used Jetson Nano for edge AI deployment, enabling efficient processing."
    ]
  },
  {
    title: "Design of Low-Power D-Type Flip-Flop Using 45nm FinFET",
    details: [
      "Created a 5-transistor D-type Flip-Flop using 45nm FinFET technology.",
      "Achieved 20% reduction in Power Delay Product (PDP) over CMOS-based designs."
    ]
  }
];

const projectDiv = document.getElementById("projects");
projects.forEach(project => {
  const h3 = document.createElement("h3");
  h3.textContent = project.title;
  projectDiv.appendChild(h3);

  const ul = document.createElement("ul");
  project.details.forEach(detail => {
    const li = document.createElement("li");
    li.textContent = detail;
    ul.appendChild(li);
  });
  projectDiv.appendChild(ul);
});
