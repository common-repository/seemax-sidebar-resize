document.addEventListener("DOMContentLoaded", function () {
  function waitForGutenberg() {
    var sidebar = document.querySelector(".interface-interface-skeleton__sidebar");

    if (sidebar) {
      var div = document.createElement("div");
      div.className = "sidebar-sizer";
      div.innerHTML =
        '<span class="sidebar-sizer-btn" id="sidebar-more">&lsaquo;</span><span class="sidebar-sizer-title">Sidebar Width</span><span class="sidebar-sizer-btn" id="sidebar-less">&rsaquo;</span>';
      sidebar.appendChild(div, sidebar);

      if (!sidebar.hasAttribute("data-width")) {
        sidebar.setAttribute("data-width", "300");
      }

      document.getElementById("sidebar-more").addEventListener("click", function () {
        var currentWidth = parseInt(sidebar.getAttribute("data-width"));
        var newWidth = currentWidth + 150;

        if (newWidth <= 900) {
          sidebar.setAttribute("data-width", newWidth.toString());
        }
      });

      document.getElementById("sidebar-less").addEventListener("click", function () {
        var currentWidth = parseInt(sidebar.getAttribute("data-width"));
        var newWidth = currentWidth - 150;

        if (newWidth >= 300) {
          sidebar.setAttribute("data-width", newWidth.toString());
        }
      });
    } else {
      setTimeout(waitForGutenberg, 100);
    }
  }

  waitForGutenberg();
});
