function timeFormatter(date) {
    const now = new Date();
    const commentDate = new Date(date);
    console.log(commentDate)

    const timezoneOffset = 3 * 60 * 60 * 1000; 
    const adjustedCommentDate = new Date(commentDate.getTime() - timezoneOffset);

    const diffInSeconds = Math.floor((now - adjustedCommentDate) / 1000);

    if (diffInSeconds < 0) {
        return "gelecekte"; // Negatif farklar gelecekde mbir zaman
    }

    let interval = Math.floor(diffInSeconds / 31536000);

    if (interval >= 1) {
        return `${interval} yıl önce`;
    }
    interval = Math.floor(diffInSeconds / 2592000);

    if (interval >= 1) {
        return `${interval} ay önce`;
    }
    interval = Math.floor(diffInSeconds / 86400);

    if (interval >= 1) {
        return `${interval} gün önce`;
    }
    interval = Math.floor(diffInSeconds / 3600);

    if (interval >= 1) {
        return `${interval} saat önce`;
    }
    interval = Math.floor(diffInSeconds / 60);

    if (interval >= 1) {
        return `${interval} dakika önce`;
    }
    return `${diffInSeconds} saniye önce`;
}

module.exports = timeFormatter;