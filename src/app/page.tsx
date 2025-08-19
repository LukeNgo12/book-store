import Image from "next/image";
import ResponsiveDrawer from "./components/Drawer";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div>
        BookStore
      </div>
      <div>
        <ResponsiveDrawer />
      </div>
    </div>
  );
}
