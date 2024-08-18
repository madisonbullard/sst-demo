import { Resource } from "sst"
import type { PageLoad } from "./$types"

export const load:PageLoad = async () => {
  const res = await fetch(Resource.ApiRouter.url)

  const msg = await res.json()

  return {
    msg
  }
}
