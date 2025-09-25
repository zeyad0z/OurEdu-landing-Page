// تفعيل active link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-link")
      .forEach((el) => el.classList.remove("active"));
    this.classList.add("active");

    // اغلاق السايدبار عند الضغط على أي لينك
    closeSidebar();
  });
});

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// دالة لإغلاق السايدبار
function closeSidebar() {
  sidebar.classList.add("translate-x-[-100%]");
  overlay.classList.add("hidden");
  sidebar.addEventListener(
    "transitionend",
    () => sidebar.classList.add("hidden"),
    { once: true }
  );
}

// فتح السايدبار
menuBtn.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  setTimeout(() => {
    sidebar.classList.remove("translate-x-[-100%]");
  }, 10);
  overlay.classList.remove("hidden");
});

// غلق بالضغط على overlay
overlay.addEventListener("click", () => {
  closeSidebar();
});

