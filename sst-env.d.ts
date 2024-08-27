/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "Auth": {
      "publicKey": string
      "type": "sst.aws.Auth"
    }
    "AuthAuthenticator": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
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
    "GithubClientID": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "GithubClientSecret": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "Worker": {
      "type": "sst.cloudflare.Worker"
      "url": string
    }
  }
}
export {}
