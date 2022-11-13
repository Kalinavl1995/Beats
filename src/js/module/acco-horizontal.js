const mesureWidth = (item) => {
    let reqItemWidth = 0;
    const screenWidth = $(window).width();
    const containerItems = item.closest('.accordion-horizontal');
    const titlesBlocks = containerItems.find('.accordion-horizontal__title');
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

    const content = item.find('.accordion-horizontal__content');
    const paddingLeft = parseInt(content.css('padding-left'));
    const paddingRight = parseInt(content.css('padding-Right'));

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if(isMobile) {
        reqItemWidth = screenWidth - titlesWidth;
    } else {
        reqItemWidth = 524;
    }

    return {
        container: reqItemWidth,
        content: reqItemWidth - paddingLeft - paddingRight
    };
};

const closeEveryItemInContainer = container => {
    const items = container.find('.accordion-horizontal__item');
    const containerItem = container.find('.accordion-horizontal__container');

    items.removeClass('active');
    containerItem.width(0);
};

const openItemAccoHorizontal = item => {
    const hiddenContent = item.find('.accordion-horizontal__container');
    const reqWidth = mesureWidth(item);
    const content = item.find('.accordion-horizontal__content');

    item.addClass('active');

    hiddenContent.width(reqWidth.container);
    content.width(reqWidth.content);
};




    $('.accordion-horizontal__title').on('click', e => {
        const $this = $(e.currentTarget);
        const item = $this.closest('.accordion-horizontal__item');
        const itemOpened = item.hasClass('active');
        const containerItems = $this.closest('.accordion-horizontal');

        if(itemOpened) {
            closeEveryItemInContainer(containerItems);
        } else {
            closeEveryItemInContainer(containerItems);
            openItemAccoHorizontal(item);
        }
    });



