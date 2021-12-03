/* global $:false, Vue:false */
/* eslint func-names:0 */
import './css/guide.styl';
import init from '@/utils/init';
import GuideResponseDemo from '@/components/GuideResponseDemo';

init();

function RGBToHex(rgbStyleString:string) {
  let rgb = rgbStyleString;
  // Choose correct separator
  const sep = rgb.indexOf(',') > -1 ? ',' : ' ';
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(')')[0].split(sep);

  let r = (+rgb[0]).toString(16);
  let g = (+rgb[1]).toString(16);
  let b = (+rgb[2]).toString(16);
  if (g.length === 1) { g = `0${g}`; }
  if (b.length === 1) { b = `0${b}`; }
  if (r.length === 1) { r = `0${r}`; }
  return `#${r}${g}${b}`;
}

$('.demo-display-color').each(function () {
  const { borderColor, backgroundColor } = window.getComputedStyle(this);
  const displayColor = backgroundColor === 'rgba(0, 0, 0, 0)' ? borderColor : backgroundColor;
  const hexColor = RGBToHex(displayColor);
  $(this).html(hexColor);
});
$('.demo-display-font-size').each(function () {
  const { fontSize } = window.getComputedStyle(this);
  const originHTML = $(this).html();
  $(this).html(`${fontSize} -- ${originHTML}`);
});


const myComponents:NodeList = document.querySelectorAll('guide-response-demo');
[].forEach.call(myComponents, (el:HTMLElement) => {
  // eslint-disable-next-line
    new Vue(
    {
      el,
      components: {
        GuideResponseDemo,
      },
    },
  );
});
