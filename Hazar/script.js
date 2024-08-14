

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        document.title = 'Aradığın portföy burada :)';
    } else {
        document.title = "Hazar's Portfolio";
    }
});
