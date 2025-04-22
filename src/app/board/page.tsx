import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer/drawer";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";

export default function Home() {
  return (
    <NormalLayout>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2>Yoyo&apos;s Bingo</h2>
          <h1>Board</h1>
        </div>
        <p>TEAM NAME</p>
      </div>
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <button>Submit</button>
            <DrawerClose>
              <p>Cancel</p>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div></div>
    </NormalLayout>
  );
}
