export function formatDateString(dateString) {
  // Parse the input date string (YYYY-MM-DD)
  const [year, month, day] = dateString.split("-");

  // Define month names
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Get the month name and format the date
  const formattedDate = `${monthNames[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;

  return formattedDate;
}

export function daysAgo(dateString) {
    // Parse the input date string (YYYY-MM-DD)
    const [year, month, day] = dateString.split('-');

    // Create a Date object for the input date
    const inputDate = new Date(year, month - 1, day);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in time (milliseconds)
    const timeDifference = currentDate - inputDate;

    // Convert time difference from milliseconds to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Return the result
    return daysDifference <= 0 ? "Today" : `${daysDifference} days ago`;
}