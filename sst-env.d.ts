/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "ApiRouter": {
      "type": "sst.aws.Router"
      "url": string
    }
    "Frontend": {
      "type": "sst.aws.SvelteKit"
      "url": string
    }
    "Hono": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
  }
}
export {}
