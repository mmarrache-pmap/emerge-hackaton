import Firebase from 'firebase';

let ref = new Firebase('https://fundinghope.firebaseio.com/');

export function getHope() {
  return ref.once('value').then(data => {
    return data.val();
  });
}
