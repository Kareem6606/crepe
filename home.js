document.addEventListener('DOMContentLoaded', function () {
    var statusRadios = document.querySelectorAll('.status');
    var statusBlocks = {
        'draft': document.querySelector('.draft-block'),
        'review': document.querySelector('.review-block'),
        'published': document.querySelector('.published-block'),
        'archived': document.querySelector('.archived-block'),
        'extraOption': document.querySelector('.extraOption-block')
    };

    function updateVisibility() {
        for (var status in statusBlocks) {
            var isChecked = document.getElementById(status).checked;
            statusBlocks[status].style.display = isChecked ? 'block' : 'none';

            // إذا كان الخيار extraOption مختارًا، عرض الكتلة المرتبطة به فقط
            if (isChecked && status === 'extraOption') {
                statusBlocks[status].style.display = 'block';
            }
        }
    }

    statusRadios.forEach(function (radio) {
        radio.addEventListener('change', updateVisibility);
    });

    // Set initial visibility
    updateVisibility();
});
