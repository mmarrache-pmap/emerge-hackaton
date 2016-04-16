// Set the page `<title>`.
export default function(props) {
  // Fallback site title.
  const suffix = 'cosmos';

  // Used in conditional.
  let title = props.route.title;

  // Is there a title?
  if (title) {
    title = title + ' | ' + suffix;

  // If no title exists.
  } else {
    title = suffix;
  }

  title = 'EHS System - Powered By ProcessMAP';

  // Set title.
  document.title = title;
}
