// Import stylesheets
import './style.scss';

console.clear();
const slider_scene_speed = document.querySelector('.input_range_scene_speed');
const slider_small_cube_rotation_speed = document.querySelector(
  '.input_range_small_cube_rotation_speed'
);
const slider_animation_delay = document.querySelector(
  '.input_range_slider_animation_delay'
);
const root = document.documentElement;

slider_scene_speed.addEventListener('input', (e) => {
  //@ts-ignore
  root.style.setProperty('--scene_animation_speed', e.target.value + 's');
});

slider_small_cube_rotation_speed.addEventListener('input', (e) => {
  //@ts-ignore
  root.style.setProperty(
    '--internal_scene_rotation_speed',
    e.target.value + 's'
  );
});

slider_animation_delay.addEventListener('input', (e) => {
  //@ts-ignore
  root.style.setProperty(
    '--animation_delay',
    e.target.value + 's'
  );
});
