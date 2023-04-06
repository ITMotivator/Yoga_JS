window.addEventListener('DOMContentLoaded', function () {
    "use strict";
    let tabBlocks = document.querySelectorAll('.info-tabcontent'),
        tabMenu = document.querySelector('.info-header'),
        tabs = document.querySelectorAll('.info-header-tab');

    function showContent(blockId) {
        tabBlocks.forEach((block, index) => {
            if (index !== blockId) {
                block.classList.remove('show');
                block.classList.add('hide');
            }
        });
    }
    showContent(0);

    tabMenu.addEventListener('click', event => {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    let blockId = i;
                    showContent(blockId);
                    tabBlocks[blockId].classList.add('show');
                    break;
                }
            }
        }
    });

});