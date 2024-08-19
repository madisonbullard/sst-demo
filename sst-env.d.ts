/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "Database": {
      "type": "sst.cloudflare.D1"
    }
    "DbDetails": {
      "accountId": string
      "dbId": string
      "type": "sst.sst.Linkable"
    }
    "Frontend": {
      "type": "sst.aws.SvelteKit"
      "url": string
    }
    "Worker": {
      "type": "sst.cloudflare.Worker"
      "url": string
    }
  }
}
export {}
