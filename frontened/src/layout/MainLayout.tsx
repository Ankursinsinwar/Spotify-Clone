import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Outlet } from "react-router-dom"
import LeftSidebar from "./components/LeftSidebar";

const MainLayout = () => {
    const isMobile = false;
  return <div className="h-screen bg-black text-white flex flex-col">

    <ResizablePanelGroup direction="horizontal" className="flex-1 flex h-full overflow-hidden p-2">

        {/* left sidebar */}
        <ResizablePanel defaultSize={20} minSize={isMobile ?0: 10} maxSize={30}>
            <LeftSidebar />
        </ResizablePanel>

        {/* resize the navbar (resizable content) */}
        <ResizableHandle className = "w-2 bg-black rounded-lg transition-colors"/>

        {/* Main content */}
        <ResizablePanel defaultSize={isMobile ? 80: 60}>
            <Outlet />
        </ResizablePanel>

        {/* resize the navbar (resizable content) */}
        <ResizableHandle className = "w-2 bg-black rounded-lg transition-colors"/>

        {/* right sidebar */}
        <ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
            friends activity
        </ResizablePanel>
    </ResizablePanelGroup>
  </div>;
};
export default MainLayout