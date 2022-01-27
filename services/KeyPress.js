export default function keypress(press) {
  document.addEventListener('keypress', ((e) => captureKey(e, press)));
}

export const unsubscribe = () => {
  document.removeEventListener('keypress', ((e) => captureKey(e, press)));
}

function captureKey(e, press) {
  const key = e.key;
  press(key);
}