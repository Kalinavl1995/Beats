const findBlockByAlias = alias => {
    return $('.block-reviews').filter((ndx, item) => {
        return $(item).attr('data-linked-with') === alias;
    });
};

$('.iteractive-avatar__link').click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr('data-open');
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest('.reviews__switcher-item');

    itemToShow.addClass('block-reviews--active').siblings().removeClass('block-reviews--active');
    curItem.addClass('interactive-avatar--active').siblings().removeClass('interactive-avatar--active');
});