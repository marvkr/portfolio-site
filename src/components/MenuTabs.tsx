import * as React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuType as MenuData } from "@/config/food-menu";

export function MenuTabs() {
  return (
    <>
      <Tabs defaultValue={MenuData[0].title} className="w-[400px]">
        <TabsList>
          {MenuData.map((menu) => (
            <TabsTrigger key={menu.title} value={menu.title}>
              {menu.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {MenuData.map((menu) => (
          <TabsContent key={menu.title} value={menu.title} className="mt-4">
            {menu.dishes.map((dish) => (
              <div key={dish.name} className="border-b border-gray-200 py-2">
                <h2 className="text-xl font-bold">{dish.name}</h2>
                <p className="text-sm text-gray-500">{dish.description}</p>
                <p className="text-lg font-semibold">{dish.price}</p>
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
