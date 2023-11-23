import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import ServersSidebar from "@/components/shared/ServersSidebar";
import { getServers } from "@/lib/actions/server.action";
import React from "react";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const servers = await getServers();
  return (
    <div className=" bg-light-200 dark:bg-[#13181E] flex min-h-screen justify-between">
      {/* <ServersSidebar servers={servers} /> */}
      <LeftSidebar />
      <div className=" p-5 w-full min-h-screen">{children}</div>
      {/* <RightSidebar /> */}
    </div>
  );
};

export default RootLayout;
