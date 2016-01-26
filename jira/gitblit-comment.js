javascript: (function($) {
    var
	comment = '[GitBlit-{{ticketId}}|{{ticketUrl}}]',
        ticketUrl = prompt('Ticket URL'),
        ticketId = (ticketUrl.split('/')).reverse()[0];

    if (ticketUrl && ticketId) {
        comment = comment.replace('{{ticketId}}', ticketId);
        comment = comment.replace('{{ticketUrl}}', ticketUrl);
        $('#footer-comment-button').children('span').trigger('click');
        $('#comment').val(comment);
        $('#issue-comment-add-submit').trigger('click');
    }
})(jQuery);

