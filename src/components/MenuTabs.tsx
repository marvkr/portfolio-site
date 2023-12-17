import * as React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuType as MenuData } from "@/config/food-menu";

export function MenuTabs() {
  return (
    <>
      <Tabs
        defaultValue={MenuData[0].title}
        className="w-full px-8 pt-4 sm:pt-10 sm:px-20 z-10">
        <TabsList>
          {MenuData.map((menu) => (
            <TabsTrigger
              key={menu.title}
              value={menu.title}
              className="font-bold">
              {menu.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {MenuData.map((menu) => (
          <TabsContent key={menu.title} value={menu.title} className="mt-4">
            {menu.dishes.map((dish) => (
              <div key={dish.name} className="border-b border-border py-4">
                <div className="flex flex-row items-center justify-between">
                  <h2 className="text-xl font-bold">{dish.name}</h2>
                  <p className="text-lg font-semibold">€{dish.price}</p>
                </div>
                <p className="text-sm text-foreground mt-4">
                  {dish.description}
                </p>
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
