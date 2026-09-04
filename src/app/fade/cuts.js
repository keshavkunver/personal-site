// One entry per haircut, newest first. The top entry powers the sliders;
// everything after it lands in The Archive at the bottom of the page.
//
// To log a new cut:
//   1. Add front-before.jpg, front-after.jpg, side-before.jpg, side-after.jpg
//      to public/fade/<YYYY-MM-DD>/
//   2. Add { slug: '<YYYY-MM-DD>', label: '<Month D, YYYY>' } at the top here.
export const cuts = [
  { slug: '2026-09-03', label: 'September 3, 2026' },
  { slug: '2026-08-06', label: 'August 6, 2026' },
];

export const photo = (cut, name) => `/fade/${cut.slug}/${name}.jpg`;
