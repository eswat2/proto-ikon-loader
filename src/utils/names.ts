import { icons, ikons } from 'proto-ikons-wc/dist/components';

const names = {
  icons: [],
  ikons: [],
};

icons.map(label => {
  names.icons.push(label.slice(0, -5));
});

ikons.map(label => {
  names.ikons.push(label.slice(0, -5));
});

export { names };
