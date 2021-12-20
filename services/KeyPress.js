export default function keypress(press) {
  document.addEventListener('keypress', ((e) => captureKey(e, press)));
}

function captureKey(e, press) {
  const key = e.key;
  press(key);
}