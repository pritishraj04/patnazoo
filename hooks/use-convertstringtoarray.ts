

import { useMemo } from "react"

export const useConvertStringToArray = (rawString: string | undefined) => {
  const pointsArray = useMemo(() => {
    if (!rawString) return []
    return rawString
      .split("•")
      .map((item) => item.trim())
      .filter((item) => item.length > 0)
  }, [rawString])

  return pointsArray
}
