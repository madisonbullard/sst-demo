import { Resource } from "sst"
import type { PageLoad } from "./$types"

export const load:PageLoad = async () => {
  const res = await fetch(Resource.ApiRouter.url)

  const data = await res.json()

  return {
    data
  }
}
