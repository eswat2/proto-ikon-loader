import { Component, Element, h, Prop } from '@stencil/core';
import 'proto-ikons-wc';
import { icons, ikons } from 'proto-ikons-wc';

const global = 'protoIkonFallback';
const fallback = window.hasOwnProperty(global) ? window[global] : 'slug-icon';

const getIcon = (label: string) => {
  const name = label.toLowerCase().split(' ').join('-');
  const icon = `${name}-icon`;
  const ikon = `${name}-ikon`;

  return icons.includes(icon) ? icon : ikons.includes(ikon) ? ikon : fallback;
};

@Component({
  tag: 'proto-ikon-loader',
  styleUrl: 'proto-ikon-loader.css',
  shadow: false,
})
export class ProtoIkonLoader {
  @Prop() hex: string = 'currentColor';
  @Prop() name: string = 'slug';
  @Prop() selected: boolean = false;
  @Prop() size: number = undefined;
  @Prop() label: string = undefined;

  @Element() el: HTMLElement;

  render() {
    const { name, hex, selected, size, label } = this;
    const title = label ? label : name;

    // NOTE:  we are explicitly setting undefined if no size is provided...
    this.el.style.setProperty(
      '--proto-ikon-size',
      size ? `${size}px` : undefined,
    );

    const Tag = getIcon(name);

    return (
      <div class="ikonBox">
        <Tag hex={hex} selected={selected} size={size} label={title} />
      </div>
    );
  }
}
