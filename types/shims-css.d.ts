import * as CSS from "csstype"

declare global {
    namespace React {
        export interface CSSProperties extends CSS.Properties<string | number> {
            "--back-color"?: string
            "--active-back-color"?: string
        }
    }
}
