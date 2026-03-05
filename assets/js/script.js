document.addEventListener('DOMContentLoaded', function () {
    var panelArea = document.getElementById('panel-area');

    // Tab switching
    document.querySelectorAll('.v-nav .btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.v-nav .btn').forEach(function (b) { b.classList.remove('active'); });
            document.querySelectorAll('.panel').forEach(function (p) { p.classList.remove('active'); });
            btn.classList.add('active');
            var target = document.getElementById(btn.getAttribute('data-tab'));
            if (target) {
                target.classList.add('active');
                panelArea.scrollTop = 0;
                window.scrollTo(0, 0);
            }
        });
    });

    // Portfolio filter
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            var filter = btn.getAttribute('data-filter');
            document.querySelectorAll('.port-item').forEach(function (item) {
                item.style.display = (filter === 'all' || item.getAttribute('data-cat') === filter) ? '' : 'none';
            });
        });
    });

    // Sidebar contacts toggle
    var toggleBtn = document.getElementById('toggleContacts');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            var c = document.getElementById('sidebarContacts');
            c.classList.toggle('open');
            var icon = toggleBtn.querySelector('i');
            icon.style.transition = 'transform 0.3s ease';
            icon.style.transform = c.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }
});