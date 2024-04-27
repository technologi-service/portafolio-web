"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

const menuItems = [
  {
    path: "/",
    title: "Home",
    icon: "home",
  },
  {
    path: "/about",
    title: "About",
    icon: "info",
  },
  {
    path: "/services",
    title: "Services",
    icon: "services",
  },
  {
    path: "/projects",
    title: "Projects",
    icon: "projects",
  },
  {
    path: "/contact",
    title: "Contact",
    icon: "contact",
  },
];

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      {/* navbar mobile */}

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <h1>WEB</h1>
          <p className="font-bold text-amber-500">DEV</p>
        </NavbarBrand>
      </NavbarContent>

      {/* navbar desktop */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <h1>WEB</h1>
          <p className="font-bold text-yellow-600">DEV</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              className="hover:text-yellow-600"
              color="foreground"
              underline="hover"
              href={item.path}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Contact whit me
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            className="flex justify-center pb-6"
            key={`${item}-${index}`}
          >
            <Link
              underline="hover"
              className="hover:text-yellow-600"
              color="foreground"
              href={item.path}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
