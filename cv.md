<div align="center">
  <img src="https://stihi.ru/photos/3redstar3.jpg" width="200" height="200" alt="Your Name" style="border-radius: 50%;">
  
  # Eugene Voronko
  
  ### Junior Front-End Developer and System Administrator
---
 🧠 *“Every expert was once a novice.”*  
 I am not afraid to learn and try new things. Welcome to my journey to full-stack development!
</div>

---

 ## 👤 About Me
 
 Hello everyone, my name is Eugene Voronko. I am a system administrator from the private IT school "ITLANDIA". I want to change the direction towards development. I am fond of sports, poetry, programming, technology and many others.  My dreams are to become either a Full Stack Dev or a DevOps engineer.

---

## 🎓 Education

### **The Rolling Scopes School**
* **Course:** JS/Front-end Development
* **Dates:** 2025 – Present

### **Yanka Kupala State University of Grodno**
* **Role/Specialization:** `[Specialty- Information technology software - Software Engineer-Bachelor's degree]`
* **Dates:** `[Years of study 2016-2020]`

### **Yanka Kupala State University of Grodno**
* **Degree:** `[Specialty- Computer Engineering - Master of Technical Sciences- Master's degree]`
* **Dates:** `[Years of study 2020- January 2022]`

---

## 🛠️ Skills
* **Languages:** JavaScript (ES6+), HTML5, CSS3, TypeScript, Python , C# , PHP, Assembler(basic),LUA.
* **Tools & Platforms:** Git, GitHub, VS Code, Webpack, npm, Figma , Android Studio , yarn ,web storm .
* **Methodologies:** Agile, Scrum (Familiar), BEM.
* **Other:** SASS/SCSS, Responsive & Adaptive Design, REST API , IP, Servers (Ubuntu,Fedora, Microsoft Windows Servers), OS, Android Developmnet , HTTP/HTTPS , FTP, DNS and other.

---

<div align="center">
📞 Contacts & Links

| Platform | Link / Info |
|---|---|
| 📧 **Email** | `eugene.voronko.13@gmail.com` |
| 🔗 **LinkedIn** | [`linkedin.com`](https://www.linkedin.com/in/eugene-voronko-8806001aa/) |
| 💻 **GitHub** | [`eugenevoronko1`](https://github.com/eugenevoronko1) |
| 🤖 **Discord** | `eugenevoronko_25550` |
| 📞 **Phone:** | `+375331234567` |
</div>

---

## Summary

Technically-minded System Administrator transitioning into software development with the goal of becoming a Full Stack or DevOps Engineer. I combine a solid understanding of IT infrastructure with growing proficiency in programming languages like JavaScript, TypeScript, and Python. I am seeking an opportunity to apply my diverse skill set to build and maintain high-quality software.

---

## Experience / Projects

### CV (This Project)
* **Description:** A responsive CV page created as a project for the RS School course.
* **Technology Stack:** HTML, CSS, Markdown.
* **Link:** [github.com](https://github.com/eugenevoronko1/rsschool-cv/blob/gh-pages/cv.md)

### Landing Page - Mebel Hit
* **Description:** The landing page for the Mebel Hit company was created at the request of my students, whom I taught in system administration.  A personal initiative to make a page similar to a "grocery" one
* **Technology Stack:** [For example: HTML, CSS, JavaScript.]
* **Link:** [github.com](https://eugenevoronko1.github.io/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/First_company/Index.html)

---

## 🌐 Languages

| Language | Speaking | Reading & Comprehension |
|---|---|---|
| **English** | **A2** (Elementary) | **B1** (Intermediate) |
| **Polish** | **A1** (Beginner) | **A1** (Beginner) |
| **Russian** | Native | Native |
| **Belarusian** | Native | Native |

---

## 💻 Code Example

This code helps to make moving around the anchors of the page smoother and slower.

```javascript
function scrollToTarget(target, duration = 800, offset = 100) {
  const targetY = target.getBoundingClientRect().top - offset;
  const startY = window.pageYOffset;
  let startTime = null;

  function animateScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + targetY * eased);

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);