const validateFields = (form, fieldsArray) => {
    fieldsArray.forEach(field => {
        field.removeClass('form__input--error-modal');

        if (field.val().trim() === '') {
            field.addClass('form__input--error-modal');
        }
    });

    const errorFields = form.find('.form__input--error-modal');

    return errorFields.length === 0;
};

$('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find('[name="name"]');
    const phone = form.find('[name="tell"]');
    const comment = form.find('[name="comment"]');
    const to = form.find('[name="to"]');

    const modal = $('#modal');
    const content = modal.find('.modal__content');

    modal.removeClass('error-modal');

    const isValid = validateFields(form, [name, phone, comment, to]);

    if (isValid) {
        const request = $.ajax({
            url: 'https://webdev-api.loftschool.com/sendmail',
            method: 'post',
            data: {
                name: name.val(),
                phone: phone.val(),
                comment  : comment.val(),
                to: to.val()
            }
        });

        request.done(data => {
            content.text(data.message);
        });

        request.fail(data => {
            console.log(data);
            const isMessage = 'responseJSON' in data;

            if (!isMessage) {
            content.text('ошибка на сервере');
            modal.addClass('error-modal');

            $.fancybox.open({
                src: '#modal',
                type: 'inline'
            });
            } else {
                const message = data.responseJSON.message;
                content.text(message);
                modal.addClass('error-modal');

                $.fancybox.open({
                    src: '#modal',
                    type: 'inline'
                });
            }
        });

        request.always(() => {
            $.fancybox.open({
                src: '#modal',
                type: 'inline'
            });
        });
    }
});

$('.app-close-modal').click(e => {
    e.preventDefault();

    $.fancybox.destroy();
});
