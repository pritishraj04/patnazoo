import { useEffect, useState } from "react";

export function useActiveTab(data: { tab: string }[] | null | undefined) {
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (data && data.length > 0) {
      const firstTabId = data[0].tab.toLowerCase().replace(/\s+/g, "-");
      setActiveTab(firstTabId);
    }
  }, [data]);

  return [activeTab, setActiveTab] as const;
}
