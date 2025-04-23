import { barmoq,container,label,fullWidth} from "./db";
let dragging=false;

function addjustSlider(pos: number) {
  const percent = Math.max(0, Math.min(pos / fullWidth, 1));
  const offset = percent * fullWidth;
  barmoq.style.left = `${offset - barmoq.offsetWidth / 2}px`;
  label.textContent = `${Math.round(percent * 100)}%`;
}

function onDrag(e: MouseEvent) {
  const bounds = container.getBoundingClientRect();
  const localX = e.clientX - bounds.left;
  addjustSlider(localX);
}

container.addEventListener('mousedown', e => {
  dragging = true;
  onDrag(e);
});

document.addEventListener('mousemove', e => {
  if (dragging) onDrag(e);
});

document.addEventListener('mouseup', () => {
  dragging = false;
});
