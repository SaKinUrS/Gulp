
const tabs = document.querySelectorAll('.tab-button');
const tabsContents = document.querySelectorAll('.catalog__content')

tabs.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', function () {
        let currentTab = item;
        let tabID = currentTab.getAttribute("data-tab");
        let currentContent = document.querySelector(tabID);


        if (!currentTab.classList.contains('_active')) {
            tabs.forEach(function (item) {
                item.classList.remove('_active')
            });

            tabsContents.forEach(function (item) {
                item.classList.remove('_active')
            });

            currentTab.classList.add('_active');
            currentContent.classList.add('_active')
        }

    });
    document.querySelector('.tab-button:nth-child(1)').click();

};
