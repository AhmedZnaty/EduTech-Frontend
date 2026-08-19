// ==================== IMAGE SLIDER ====================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach(function (slide) {
    slide.style.display = "none";
  });

  if (slides.length > 0) {
    slides[index].style.display = "block";
  }
}

if (slides.length > 0) {
  showSlide(currentSlide);

  setInterval(function () {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  }, 3000);
}

// ==================== COURSE DETAILS ====================

// Get the courseId from the URL
const urlParams = new URLSearchParams(window.location.search);

const courseId = urlParams.get("courseId");

// Store all course data in one object
const courses = {
  web: {
    name: "Full Web Development",
    category: "Web Development",
    image: "images/web-development.jpg",
    description: "Learn HTML, CSS and JavaScript and build modern websites.",
    level: "Beginner",
    duration: "8 Weeks",
    lessons: "24 Lessons",
    topics: [
      "HTML5 and page structure",
      "CSS and modern web design",
      "JavaScript fundamentals",
      "Responsive web layouts",
      "Building real web projects",
    ],
  },

  python: {
    name: "Python Programming",
    category: "Programming",
    image: "images/python.jpg",
    description:
      "Learn Python from the basics and build real programming skills.",
    level: "Beginner",
    duration: "6 Weeks",
    lessons: "20 Lessons",
    topics: [
      "Python basics",
      "Variables and data types",
      "Conditions and loops",
      "Functions",
      "Object oriented programming",
    ],
  },

  ai: {
    name: "Introduction to AI",
    category: "Artificial Intelligence",
    image: "images/ai.jpg",
    description:
      "Discover Artificial Intelligence and start your journey into AI.",
    level: "Intermediate",
    duration: "10 Weeks",
    lessons: "30 Lessons",
    topics: [
      "Introduction to AI",
      "Machine learning basics",
      "Neural networks",
      "Data preparation",
      "AI applications",
    ],
  },

  dataScience: {
    name: "Data Science Basics",
    category: "Data Science",
    image: "images/data-science.jpg",
    description: "Learn how to analyze data and understand useful insights.",
    level: "Intermediate",
    duration: "8 Weeks",
    lessons: "24 Lessons",
    topics: [
      "Data analysis",
      "Data visualization",
      "Statistics basics",
      "Working with datasets",
      "Data insights",
    ],
  },

  uiux: {
    name: "UI / UX Design",
    category: "Design",
    image: "images/ui-ux.jpg",
    description:
      "Learn how to design clean, modern and user-friendly interfaces.",
    level: "Beginner",
    duration: "5 Weeks",
    lessons: "15 Lessons",
    topics: [
      "UI design basics",
      "UX principles",
      "Wireframing",
      "User research",
      "Interface design",
    ],
  },

  machineLearning: {
    name: "Machine Learning",
    category: "Machine Learning",
    image: "images/machine-learning.jpg",
    description:
      "Understand the basics of machine learning and intelligent systems.",
    level: "Advanced",
    duration: "12 Weeks",
    lessons: "36 Lessons",
    topics: [
      "Machine learning concepts",
      "Supervised learning",
      "Unsupervised learning",
      "Model training",
      "Model evaluation",
    ],
  },
};

if (courseId && courses[courseId]) {
  const course = courses[courseId];

  // Put course data into the HTML

  document.getElementById("courseImage").src = course.image;

  document.getElementById("courseImage").alt = course.name;

  document.getElementById("courseCategory").textContent = course.category;

  document.getElementById("courseName").textContent = course.name;

  document.getElementById("courseDescription").textContent = course.description;

  document.getElementById("courseLevel").textContent = course.level;

  document.getElementById("courseDuration").textContent = course.duration;

  document.getElementById("courseLessons").textContent = course.lessons;

  const courseTopics = document.getElementById("courseTopics");

  course.topics.forEach(function (topic) {
    const listItem = document.createElement("li");

    listItem.textContent = topic;

    courseTopics.appendChild(listItem);
  });
}
// ==================== REGISTER ====================

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("usernameInput").value.trim();

    const email = document.getElementById("emailInput").value.trim();

    const password = document.getElementById("passwordInput").value;

    const confirmPassword = document.getElementById(
      "confirmPasswordInput",
    ).value;

    const usernameError = document.getElementById("usernameError");

    const emailError = document.getElementById("emailError");

    const passwordError = document.getElementById("passwordError");

    const confirmPasswordError = document.getElementById(
      "confirmPasswordError",
    );

    const registerMessage = document.getElementById("registerMessage");

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    registerMessage.textContent = "";

    let isValid = true;

    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if (!usernameRegex.test(username)) {
      usernameError.textContent =
        "Username must be 3-20 characters and contain only letters, numbers or _.";

      isValid = false;
    }

    if (!emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email.";

      isValid = false;
    }

    if (!passwordRegex.test(password)) {
      passwordError.textContent =
        "Password must be at least 8 characters and contain a letter and a number.";

      isValid = false;
    }

    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";

      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const user = {
      username: username,
      email: email,
      password: password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));

    registerMessage.textContent = "Account created successfully!";

    registerMessage.style.color = "#16a34a";

    registerForm.reset();
  });
}
// ==================== LOGIN ====================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const loginUsername = document
      .getElementById("loginUsernameInput")
      .value.trim();

    const loginPassword = document.getElementById("loginPasswordInput").value;

    const loginUsernameError = document.getElementById("loginUsernameError");

    const loginPasswordError = document.getElementById("loginPasswordError");

    const loginMessage = document.getElementById("loginMessage");

    loginUsernameError.textContent = "";
    loginPasswordError.textContent = "";
    loginMessage.textContent = "";

    if (loginUsername === "") {
      loginUsernameError.textContent = "Please enter your username.";

      return;
    }

    if (loginPassword === "") {
      loginPasswordError.textContent = "Please enter your password.";

      return;
    }

    // Check admin login FIRST, before checking for a registered student
    if (loginUsername === "admin" && loginPassword === "admin123") {
      localStorage.setItem("isAdmin", "true");

      window.location.href = "admin.html";

      return;
    }

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
      loginMessage.textContent = "No account found. Please register first.";

      loginMessage.style.color = "#dc2626";

      return;
    }

    if (
      loginUsername === registeredUser.username &&
      loginPassword === registeredUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      localStorage.setItem("currentUser", registeredUser.username);

      loginMessage.textContent = "Login successful!";

      loginMessage.style.color = "#16a34a";

      setTimeout(function () {
        window.location.href = "dashboard.html";
      }, 1000);
    } else {
      loginMessage.textContent = "Incorrect username or password.";

      loginMessage.style.color = "#dc2626";
    }
  });
}
// ==================== DASHBOARD ====================

const dashboardUsername = document.getElementById("dashboardUsername");

const logoutButton = document.getElementById("logoutButton");

if (dashboardUsername) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const currentUser = localStorage.getItem("currentUser");

  if (isLoggedIn !== "true" || !currentUser) {
    window.location.href = "login.html";
  } else {
    dashboardUsername.textContent = currentUser;
  }
}

if (logoutButton) {
  logoutButton.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.removeItem("isLoggedIn");

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";
  });
}
// ==================== CONTACT ====================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const contactName = document
      .getElementById("contactNameInput")
      .value.trim();

    const contactEmail = document
      .getElementById("contactEmailInput")
      .value.trim();

    const contactMessageText = document
      .getElementById("contactMessageInput")
      .value.trim();

    const contactNameError = document.getElementById("contactNameError");
    const contactEmailError = document.getElementById("contactEmailError");
    const contactMessageError = document.getElementById("contactMessageError");
    const contactMessage = document.getElementById("contactMessage");

    contactNameError.textContent = "";
    contactEmailError.textContent = "";
    contactMessageError.textContent = "";
    contactMessage.textContent = "";

    let isValid = true;

    const contactEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (contactName === "") {
      contactNameError.textContent = "Please enter your name.";

      isValid = false;
    }

    if (!contactEmailRegex.test(contactEmail)) {
      contactEmailError.textContent = "Please enter a valid email.";

      isValid = false;
    }

    if (contactMessageText.length < 10) {
      contactMessageError.textContent =
        "Message must contain at least 10 characters.";

      isValid = false;
    }

    if (!isValid) {
      return;
    }

    contactMessage.textContent = "Your message has been sent successfully.";

    contactMessage.style.color = "#16a34a";

    contactForm.reset();
  });
}
// ==================== ADMIN ====================

const courseForm = document.getElementById("courseForm");

const adminCourseList = document.getElementById("adminCourseList");

if (courseForm && adminCourseList) {
  let adminCourses = JSON.parse(localStorage.getItem("adminCourses")) || [
    {
      id: 1,
      name: "Full Web Development",
      category: "Web Development",
      level: "Beginner",
      duration: "8 Weeks",
    },

    {
      id: 2,
      name: "Python Programming",
      category: "Programming",
      level: "Beginner",
      duration: "6 Weeks",
    },

    {
      id: 3,
      name: "Introduction to AI",
      category: "Artificial Intelligence",
      level: "Intermediate",
      duration: "10 Weeks",
    },
  ];

  let editingCourseId = null;

  function saveAdminCourses() {
    localStorage.setItem("adminCourses", JSON.stringify(adminCourses));
  }

  function displayAdminCourses() {
    adminCourseList.innerHTML = "";

    adminCourses.forEach(function (course) {
      const courseItem = document.createElement("div");

      courseItem.className = "admin-course-item";

      courseItem.innerHTML = `

                <div>

                    <h3>${course.name}</h3>

                    <p>
                        ${course.category}
                        •
                        ${course.level}
                        •
                        ${course.duration}
                    </p>

                </div>

                <div class="admin-course-actions">

                    <button
                        class="admin-edit-button"
                        data-id="${course.id}"
                    >
                        Edit
                    </button>

                    <button
                        class="admin-delete-button"
                        data-id="${course.id}"
                    >
                        Delete
                    </button>

                </div>

            `;

      adminCourseList.appendChild(courseItem);
    });
  }

  courseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const courseName = document.getElementById("courseNameInput").value.trim();

    const courseCategory = document
      .getElementById("courseCategoryInput")
      .value.trim();

    const courseLevel = document.getElementById("courseLevelInput").value;

    const courseDuration = document
      .getElementById("courseDurationInput")
      .value.trim();

    if (courseName === "" || courseCategory === "" || courseDuration === "") {
      alert("Please fill in all fields.");

      return;
    }

    if (editingCourseId !== null) {
      const course = adminCourses.find(function (course) {
        return course.id === editingCourseId;
      });

      course.name = courseName;

      course.category = courseCategory;

      course.level = courseLevel;

      course.duration = courseDuration;

      editingCourseId = null;
    } else {
      const newCourse = {
        id: Date.now(),

        name: courseName,

        category: courseCategory,

        level: courseLevel,

        duration: courseDuration,
      };

      adminCourses.push(newCourse);
    }

    saveAdminCourses();

    displayAdminCourses();

    courseForm.reset();
  });

  adminCourseList.addEventListener("click", function (event) {
    const courseId = Number(event.target.dataset.id);

    if (event.target.classList.contains("admin-delete-button")) {
      adminCourses = adminCourses.filter(function (course) {
        return course.id !== courseId;
      });

      saveAdminCourses();

      displayAdminCourses();
    }

    if (event.target.classList.contains("admin-edit-button")) {
      const course = adminCourses.find(function (course) {
        return course.id === courseId;
      });

      document.getElementById("courseNameInput").value = course.name;

      document.getElementById("courseCategoryInput").value = course.category;

      document.getElementById("courseLevelInput").value = course.level;

      document.getElementById("courseDurationInput").value = course.duration;

      editingCourseId = course.id;
    }
  });

  displayAdminCourses();
}
