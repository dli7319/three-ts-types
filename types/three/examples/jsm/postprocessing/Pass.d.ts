import { Material, WebGLRenderer, WebGLRenderTarget } from "three";

export class Pass {
    constructor();

    isPass: boolean;
    enabled: boolean;
    needsSwap: boolean;
    clear: boolean;
    renderToScreen: boolean;

    setSize(width: number, height: number): void;
    render(
        renderer: WebGLRenderer,
        writeBuffer: WebGLRenderTarget,
        readBuffer: WebGLRenderTarget,
        deltaTime: number,
        maskActive: boolean,
    ): void;

    dispose(): void;
}

export class FullScreenQuad<TMaterial extends Material = Material> {
    constructor(material?: TMaterial);

    render(renderer: WebGLRenderer): void;
    dispose(): void;

    material: TMaterial;
}
