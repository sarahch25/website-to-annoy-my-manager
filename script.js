function showHours(day) {
    // תחילה, נסגור את כל האפשרויות
    let days = document.querySelectorAll('.hours');
    days.forEach(function(dayDiv) {
        dayDiv.style.display = 'none';
    });

    // עכשיו נפתח את האפשרויות של היום שנבחר
    let selectedDay = document.getElementById(day);
    selectedDay.style.display = 'block';
}
