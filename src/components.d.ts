/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ProtoIkonLoader {
        "hex": string;
        "name": string;
        "selected": boolean;
        "size": number;
    }
}
declare global {
    interface HTMLProtoIkonLoaderElement extends Components.ProtoIkonLoader, HTMLStencilElement {
    }
    var HTMLProtoIkonLoaderElement: {
        prototype: HTMLProtoIkonLoaderElement;
        new (): HTMLProtoIkonLoaderElement;
    };
    interface HTMLElementTagNameMap {
        "proto-ikon-loader": HTMLProtoIkonLoaderElement;
    }
}
declare namespace LocalJSX {
    interface ProtoIkonLoader {
        "hex"?: string;
        "name"?: string;
        "selected"?: boolean;
        "size"?: number;
    }
    interface IntrinsicElements {
        "proto-ikon-loader": ProtoIkonLoader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "proto-ikon-loader": LocalJSX.ProtoIkonLoader & JSXBase.HTMLAttributes<HTMLProtoIkonLoaderElement>;
        }
    }
}
