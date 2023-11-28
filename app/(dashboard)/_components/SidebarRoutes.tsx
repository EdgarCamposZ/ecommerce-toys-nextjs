"use client";
import { Layout, Compass, List, BarChart } from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Navegar",
        href: "/search",
    }
];

const adminRoutes = [
    {
        icon: List,
        label: "Juguetes",
        href: "/admin/juguetes",
    },
    {
        icon: BarChart,
        label: "Estadisticas",
        href: "/admin/stadistics",
    }
];

export const SidebarRoutes = () => {
    const pathname = usePathname();
    const isadminPage = pathname?.includes("/admin");
    const routes = isadminPage ? adminRoutes : guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
};

